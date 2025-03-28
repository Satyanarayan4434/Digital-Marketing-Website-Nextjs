import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import Blog from "@/models/Blog";
import Contact from "@/models/Contact";

export async function GET(request) {
  try {
    // Get the authentication information
    // const { userId, sessionId, getToken } = auth();
    // console.log("Full auth object:", { userId, sessionId , getToken});
    // Attempt to get the current user for additional debugging
    const user = await currentUser();

    console.log("Authentication Debug:", {
      user: user.id,
      userExists: !!user,
      userEmail: user?.emailAddresses[0]?.emailAddress,
    });

    const userId = user?.id;
    // Check if userId exists
    if (!userId) {
      console.log("No authenticated user found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

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
    console.error("Error in dashboard stats route:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard stats", details: error.message },
      { status: 500 }
    );
  }
}
