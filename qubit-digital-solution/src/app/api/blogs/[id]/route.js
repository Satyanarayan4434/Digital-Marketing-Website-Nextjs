import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import Blog from "@/models/Blog";

export async function GET(request, { params }) {
  try {
    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const title = formData.get("title");
    const excerpt = formData.get("excerpt");
    const content = formData.get("content");
    const category = formData.get("category");
    const slug = formData.get("slug");

    // Find blog
    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Check if slug is being changed and if new slug already exists
    if (slug && slug !== blog.slug) {
      const slugExists = await Blog.findOne({
        slug,
        _id: { $ne: params.id },
      });

      if (slugExists) {
        return NextResponse.json(
          { error: "A blog with this slug already exists" },
          { status: 400 }
        );
      }
    }

    // Handle image upload
    const image = formData.get("image");

    if (image && image.size > 0) {
      // Upload to Cloudinary using Next Cloudinary
      const { uploadToCloudinary, deleteFromCloudinary } = await import(
        "@/lib/cloudinary"
      );

      // Delete old image if it exists and is not the default
      if (
        blog.featuredImage &&
        blog.featuredImage !== "/placeholder.svg" &&
        blog.featuredImage.includes("cloudinary")
      ) {
        await deleteFromCloudinary(blog.featuredImage);
      }

      // Upload new image
      const result = await uploadToCloudinary(image);
      blog.featuredImage = result.secure_url;
    }

    // Update blog fields
    blog.title = title || blog.title;
    blog.excerpt = excerpt || blog.excerpt;
    blog.content = content || blog.content;
    blog.category = category || blog.category;
    blog.slug = slug || blog.slug;

    const updatedBlog = await blog.save();

    return NextResponse.json({
      success: true,
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Delete image from Cloudinary if it exists and is not the default
    if (
      blog.featuredImage &&
      blog.featuredImage !== "/placeholder.svg" &&
      blog.featuredImage.includes("cloudinary")
    ) {
      const { deleteFromCloudinary } = await import("@/lib/cloudinary");
      await deleteFromCloudinary(blog.featuredImage);
    }

    await blog.deleteOne();

    return NextResponse.json({
      success: true,
      message: "Blog removed",
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}
