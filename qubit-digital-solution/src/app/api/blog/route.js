import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";

// In a real application, you would use MongoDB with Mongoose
// This is a simple in-memory database for demonstration
const posts = [
  {
    id: "1",
    title: "10 SEO Strategies to Boost Your Website Ranking",
    slug: "10-seo-strategies",
    content: "Full content would go here...",
    excerpt:
      "Learn the top SEO strategies that can help improve your website's visibility and ranking on search engines.",
    author: "John Doe",
    category: "SEO",
    createdAt: new Date("2023-05-15").toISOString(),
  },
  {
    id: "2",
    title: "The Power of Social Media Marketing for Small Businesses",
    slug: "social-media-marketing-small-businesses",
    content: "Full content would go here...",
    excerpt:
      "Discover how small businesses can leverage social media marketing to reach their target audience and grow their brand.",
    author: "Jane Smith",
    category: "Social Media",
    createdAt: new Date("2023-05-10").toISOString(),
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  }

  return NextResponse.json(posts);
}

export async function POST(request) {
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

    // Validate required fields
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 }
      );
    }

    // Check if slug already exists
    if (posts.some((post) => post.slug === body.slug)) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 }
      );
    }

    const newPost = {
      id: Date.now().toString(),
      title: body.title,
      slug: body.slug,
      content: body.content,
      excerpt: body.excerpt || "",
      author: `${user.firstName} ${user.lastName}`,
      category: body.category || "Uncategorized",
      createdAt: new Date().toISOString(),
    };

    posts.push(newPost);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
