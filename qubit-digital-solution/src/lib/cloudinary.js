import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload file to Cloudinary
export async function uploadToCloudinary(file) {
  try {
    // Convert file to base64
    const fileBuffer = await file.arrayBuffer();
    const base64File = Buffer.from(fileBuffer).toString("base64");
    const dataURI = `data:${file.type};base64,${base64File}`;
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      width: 1200,
    });

    return result;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Failed to upload image");
  }
}

// Function to delete file from Cloudinary
export async function deleteFromCloudinary(imageUrl) {
  try {
    // Extract public ID from URL
    const publicId = imageUrl.split("/").slice(-2).join("/").split(".")[0];

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    return { success: true };
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw new Error("Failed to delete image");
  }
}
