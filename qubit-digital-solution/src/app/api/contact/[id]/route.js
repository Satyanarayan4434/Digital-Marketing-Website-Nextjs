import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";

export async function GET(request, { params }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const message = await Contact.findById(params.id);

    if (!message) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }

    // Update status to read if it's new
    if (message.status === "new") {
      message.status = "read";
      await message.save();
    }

    return NextResponse.json({
      success: true,
      message,
    });
  } catch (error) {
    console.error("Error fetching contact message:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact message" },
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

    await connectDB();

    const body = await request.json();
    const { status } = body;

    const message = await Contact.findById(params.id);

    if (!message) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }

    message.status = status || message.status;

    const updatedMessage = await message.save();

    return NextResponse.json({
      success: true,
      message: updatedMessage,
    });
  } catch (error) {
    console.error("Error updating contact message:", error);
    return NextResponse.json(
      { error: "Failed to update contact message" },
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

    await connectDB();

    const message = await Contact.findById(params.id);

    if (!message) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }

    await message.deleteOne();

    return NextResponse.json({
      success: true,
      message: "Message removed",
    });
  } catch (error) {
    console.error("Error deleting contact message:", error);
    return NextResponse.json(
      { error: "Failed to delete contact message" },
      { status: 500 }
    );
  }
}
