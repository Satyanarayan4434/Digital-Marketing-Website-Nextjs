const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    phone: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Please add a message"],
    },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
    serviceType: {
      type: String,
      enum: ["web-development", "brand-strategy", "creative-designing", "digital-marketing", "other"],
      default: "other",
    }
  },
  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

module.exports = Contact;
