import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import Blog from "@/models/Blog";
import Contact from "@/models/Contact";

export async function GET(request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // No need to call connectDB() here
    // Get total blogs
    const totalBlogs = await Blog.countDocuments();

    // Get total messages
    const totalMessages = await Contact.countDocuments();

    // Get recent blogs
    const recentBlogs = await Blog.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title category createdAt");

    // Get recent messages
    const recentMessages = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("name email subject status createdAt");

    return NextResponse.json({
      totalBlogs,
      totalMessages,
      recentBlogs,
      recentMessages,
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard stats" },
      { status: 500 }
    );
  }
}
