import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import AdminDashboard from "@/components/admin/Dashboard";

export const metadata = {
  title: "Admin Dashboard - Qubit Digital Solution",
  description: "Manage your digital marketing platform",
};

export default async function AdminPage() {
  // const user = await currentUser();

  // Check if user is authenticated and has admin role
  // if (!user || user.publicMetadata.role !== "admin") {
  //   redirect("/");
  // }

  const user = {
    firstName : "ravikiran",
  }

  return <AdminDashboard user={user} />;
}
