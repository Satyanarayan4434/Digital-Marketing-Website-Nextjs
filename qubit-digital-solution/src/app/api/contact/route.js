import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import { currentUser } from "@clerk/nextjs/server";

export async function GET(request) {
  try {
    const user = await currentUser();
    const userId = user?.id;
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const messages = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact messages" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {

    const body = await request.json();
    console.log("body", body);
    const { email, name, message, phone, serviceType } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide name, email and message" },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
      serviceType
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Error sending contact message:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
