import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number.parseInt(searchParams.get("page") || "0", 10);
    const limit = Number.parseInt(searchParams.get("limit") || "10", 10);

    // Get users with pagination
    const client = await clerkClient();
    const response = await client.users.getUserList({
      limit: limit,
      offset: page * limit,
    });

    const users = response.data || response;
    const totalCount = response.totalCount || users.length;

    return NextResponse.json({
      users,
      totalCount,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users", details: error.message },
      { status: 500 }
    );
  }
}
