import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req) {
  const { userId,phoneNumber, occupation, firstName, lastName } = await req.json();
  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      phoneNumber,
      occupation,
      firstName: firstName || "",
      lastName: lastName || "",
    },
  });

  return Response.json({ success: true });
}
