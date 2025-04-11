import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import Blog from "@/models/Blog"; // Adjust path if needed
// Optional: Import your DB connection utility if you manage connections per-request
// import dbConnect from "@/lib/dbConnect"; 

/**
 * GET /api/blogs
 * Fetches published blog posts with pagination and filtering.
 * Query Params:
 * - page (number): The page number to fetch (default: 1)
 * - limit (number): The number of blogs per page (default: 10)
 * - category (string): Filter blogs by category slug (optional)
 */
export async function GET(request) {
  // Optional: await dbConnect(); // Connect to DB if needed per request

  console.log("GET /api/blogs triggered"); // Log entry

  try {
    const { searchParams } = new URL(request.url);

    // --- Pagination ---
    const page = Number.parseInt(searchParams.get("page")) || 1;
    const limit = Number.parseInt(searchParams.get("limit")) || 10; // Default to 10 blogs per page
    if (limit <= 0) {
        limit = 10; // Ensure limit is positive
    }
    const skip = (page - 1) * limit;
    console.log(`Pagination: page=${page}, limit=${limit}, skip=${skip}`);

    // --- Filtering ---
    const category = searchParams.get("category");
    const query = { published: true }; // Only fetch published blogs
    if (category && category !== "All") {
      query.category = category;
    }
    console.log("Query:", query);

    // --- Database Query (Optimized) ---
    // 1. Fetch paginated blogs, selecting only necessary fields for list view
    //    IMPORTANT: Ensure fields like 'published', 'category', 'createdAt' are indexed in MongoDB!
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 }) // Sort by creation date descending
      .skip(skip)
      .limit(limit)
      .select("title excerpt slug category author featuredImage createdAt published") // Select specific fields, EXCLUDE 'content'
      .lean(); // Use lean() for potentially faster, plain JS objects if not modifying

    console.log(`Found ${blogs.length} blogs for page ${page}`);

    // 2. Get the total count of documents matching the query for pagination controls
    const totalBlogs = await Blog.countDocuments(query);
    console.log(`Total matching blogs: ${totalBlogs}`);

    // --- Response ---
    return NextResponse.json({
      success: true,
      currentPage: page,
      totalPages: Math.ceil(totalBlogs / limit),
      count: blogs.length, // Count for the current page
      totalBlogs: totalBlogs, // Total matching blogs
      blogs,
    });

  } catch (error) {
    console.error("Error in GET /api/blogs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs", details: error.message },
      { status: 500 }
    );
  }
}

/**
 * POST /api/blogs
 * Creates a new blog post. Requires authentication.
 */
export async function POST(request) {
  // Optional: await dbConnect(); // Connect to DB if needed per request

  console.log("POST /api/blogs triggered");

  try {
    // --- Authorization ---
    const { userId } = getAuth(request);
    if (!userId) {
      console.log("Unauthorized attempt to create blog");
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }
    console.log(`Authorized user: ${userId}`);

    // --- Form Data Parsing ---
    const formData = await request.formData();
    const title = formData.get("title");
    const excerpt = formData.get("excerpt");
    const content = formData.get("content");
    const category = formData.get("category");
    const slug = formData.get("slug");
    const author = formData.get("author"); // Consider using userId or fetching author name based on userId
    const published = formData.get("published") === 'true'; // Example: Handle published status

    // --- Basic Validation ---
     if (!title || !excerpt || !content || !category || !slug || !author) {
         console.log("Missing required fields in POST request");
         return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }
    console.log(`Received data: title=${title}, slug=${slug}, category=${category}`);


    // --- Check for Existing Slug ---
    // IMPORTANT: Ensure 'slug' field is indexed in MongoDB for performance!
    const blogExists = await Blog.findOne({ slug }).lean(); // Use lean if just checking existence
    if (blogExists) {
       console.log(`Blog with slug '${slug}' already exists.`);
      return NextResponse.json(
        { success: false, error: "A blog with this slug already exists" },
        { status: 409 } // 409 Conflict is often more appropriate
      );
    }

    // --- Image Upload Handling ---
    let featuredImage = "/placeholder.svg"; // Default image
    const image = formData.get("image");

    if (image && typeof image === 'object' && image.size > 0) {
       console.log(`Attempting to upload image: ${image.name}, size: ${image.size}`);
      try {
        // Dynamically import Cloudinary upload function (ensure path is correct)
        const { uploadToCloudinary } = await import("@/lib/cloudinary");
        const result = await uploadToCloudinary(image);

        if (result?.secure_url) {
             featuredImage = result.secure_url;
             console.log(`Image uploaded successfully: ${featuredImage}`);
        } else {
             console.warn("Cloudinary upload finished but did not return a secure_url. Using default image.");
             // Potentially return an error if image upload is mandatory and failed
        }
      } catch (uploadError) {
        console.error("Error uploading image to Cloudinary:", uploadError);
        // Return an error as image upload failed
        return NextResponse.json(
             { success: false, error: "Failed to upload image", details: uploadError.message },
             { status: 500 }
        );
      }
    } else {
        console.log("No image provided or image is invalid. Using default image.");
    }

    // --- Create Blog Post ---
    console.log("Creating new blog post in database...");
    const blog = await Blog.create({
      title,
      excerpt,
      content,
      category,
      slug,
      author, // Ensure this is the intended author value
      featuredImage,
      published, // Save the published status
      // Optionally link to the user who created it:
      // userId: userId,
    });
    console.log(`Blog created successfully with ID: ${blog._id}`);

    // --- Response ---
    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully",
        blog,
      },
      { status: 201 } // 201 Created status code
    );

  } catch (error) {
    console.error("Error in POST /api/blogs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create blog post", details: error.message },
      { status: 500 }
    );
  }
}