import connectDB from "./db";

const initDB = async () => {
  try {
    await connectDB();
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Failed to initialize database:", error);
  }
};

export default initDB;
