import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import Blog from "@/models/Blog";
import connectDB from "@/lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Number.parseInt(searchParams.get("limit")) || 0;
    const category = searchParams.get("category");
    await connectDB();
    const query = { published: true };

    if (category && category !== "All") {
      query.category = category;
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 }).limit(limit);

    return NextResponse.json({
      success: true,
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    console.log("userId", userId);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    console.log("request", userId);
    const formData = await request.formData();
    const title = formData.get("title");
    const excerpt = formData.get("excerpt");
    const content = formData.get("content");
    const category = formData.get("category");
    const slug = formData.get("slug");
    const author = formData.get("author");

    // Check if blog with same slug already exists
    const blogExists = await Blog.findOne({ slug });
    console.log("blogExists", blogExists);
    if (blogExists) {
      return NextResponse.json(
        { error: "A blog with this slug already exists" },
        { status: 400 }
      );
    }

    // Handle image upload
    let featuredImage = "/placeholder.svg";
    const image = formData.get("image");

    if (image && image.size > 0) {
      // Upload to Cloudinary using Next Cloudinary
      const { uploadToCloudinary } = await import("@/lib/cloudinary");
      const result = await uploadToCloudinary(image);
      featuredImage = result.secure_url;
    }
    console.log("featuredImage", featuredImage);
    // Create blog
    const blog = await Blog.create({
      title,
      excerpt,
      content,
      category,
      slug,
      author,
      featuredImage,
    });
    

    return NextResponse.json(
      {
        success: true,
        blog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
