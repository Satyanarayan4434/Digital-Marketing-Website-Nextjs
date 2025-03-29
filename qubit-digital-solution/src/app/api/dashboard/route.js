import { NextResponse } from "next/server";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import Blog from "@/models/Blog";
import Contact from "@/models/Contact";

export async function GET(request) {
  try {
    const user = await currentUser();

    console.log("Authentication Debug:", {
      user: user.id,
      userExists: !!user,
      userEmail: user?.emailAddresses[0]?.emailAddress,
    });

    const userId = user?.id;
    if (!userId) {
      console.log("No authenticated user found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const client = await clerkClient();
    const userData = await client.users.getUserList();
    const totalUserCount = userData.totalCount;

    const today = new Date();
    const dailySignUpCount = userData?.data.filter((user) => {
      const createdAt = new Date(user.createdAt);
      return createdAt.toDateString() === today.toDateString();
    }).length;

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
      totalUserCount,
      dailySignUpCount,
    });
  } catch (error) {
    console.error("Error in dashboard stats route:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard stats", details: error.message },
      { status: 500 }
    );
  }
}
