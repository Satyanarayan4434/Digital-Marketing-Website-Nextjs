import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import { sendEmail } from "@/lib/email";

export async function GET(request) {
  try {
    const { userId } = auth();

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
    await connectDB();

    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate request
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide name, email and message" },
        { status: 400 }
      );
    }

    // Save contact message to database
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send emails
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject || "New Message"}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    await sendEmail({
      to: email,
      subject: "Thank you for contacting PromotEdge",
      html: `
        <h3>Thank you for contacting PromotEdge!</h3>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,</p>
        <p>The PromotEdge Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      contact,
    });
  } catch (error) {
    console.error("Error sending contact message:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
