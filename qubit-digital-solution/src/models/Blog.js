import mongoose from "mongoose";
import slugify from "slugify";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, "Please add an excerpt"],
      maxlength: [500, "Excerpt cannot be more than 500 characters"],
    },
    content: {
      type: String,
      required: [true, "Please add content"],
    },
    featuredImage: {
      type: String,
      default: "/placeholder.svg",
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      enum: [
        "Uncategorized",
        "SEO",
        "Social Media",
        "Content Marketing",
        "Email Marketing",
        "Digital Marketing",
        "Analytics",
      ],
      default: "Uncategorized",
    },
    author: {
      type: String,
      default: "Admin",
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create slug from title before saving
BlogSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
