import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";

// Reference to the in-memory database from the parent route
// In a real application, you would use MongoDB with Mongoose
global.posts = global.posts || [];

export async function GET(request, { params }) {
  const post = global.posts.find((p) => p.id === params.id);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  const auth = getAuth(request);

  // Check if user is authenticated and has admin role
  if (!auth.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await clerkClient.users.getUser(auth.userId);

  if (user.publicMetadata.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();

    // Find the post index
    const postIndex = global.posts.findIndex((p) => p.id === params.id);

    if (postIndex === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Validate required fields
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 }
      );
    }

    // Check if slug already exists (excluding the current post)
    if (
      body.slug !== global.posts[postIndex].slug &&
      global.posts.some((post) => post.slug === body.slug)
    ) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 }
      );
    }

    // Update the post
    const updatedPost = {
      ...global.posts[postIndex],
      title: body.title,
      slug: body.slug,
      content: body.content,
      excerpt: body.excerpt || global.posts[postIndex].excerpt,
      category: body.category || global.posts[postIndex].category,
      updatedAt: new Date().toISOString(),
    };

    global.posts[postIndex] = updatedPost;

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const auth = getAuth(request);

  // Check if user is authenticated and has admin role
  if (!auth.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await clerkClient.users.getUser(auth.userId);

  if (user.publicMetadata.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    // Find the post index
    const postIndex = global.posts.findIndex((p) => p.id === params.id);

    if (postIndex === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Remove the post
    global.posts.splice(postIndex, 1);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
