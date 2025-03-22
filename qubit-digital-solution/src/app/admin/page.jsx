// "use client";
// import { useUser } from "@clerk/nextjs";

// export default function AdminPage() {
//   const { isLoaded, isSignedIn, user } = useUser();

//   // If not loaded yet, don't show user data
//   if (!isLoaded) {
//     return <p>Loading...</p>;
//   }

//   console.log(user, "signed", isSignedIn);

//   return (
//     <div>
//       {isSignedIn && user?.publicMetadata.role === "admin" ? (
//         <div>Admin Dashboard for {user.firstName}</div>
//       ) : !isSignedIn ? (
//         <p>Not signed in</p>
//       ) : (
//         <div className="w-10/12 mx-auto min-h-[300px] flex flex-col justify-center items-center">
//           <p className="text-4xl font-semibold">403</p>
//           <p className="text-xl font-semibold">
//             Only admins can access this page
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  BarChart3,
  Users,
  FileText,
  Mail,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import DashboardLayout from "@/components/admin/dashboard-layout";
import { toast } from "sonner";

export default function AdminDashboardPage() {
  const { user, isLoaded } = useUser();
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalMessages: 0,
    recentBlogs: [],
    recentMessages: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  // Redirect if not logged in
  if (isLoaded && !user) {
    redirect("/sign-in");
  }

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/dashboard");

      if (!response.ok) {
        throw new Error("Failed to fetch dashboard data");
      }

      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      toast.error("Failed to load dashboard data");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!isLoaded || isLoading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user?.firstName || user?.username || "Admin"}!
            </p>
          </div>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Button asChild>
              <Link href="/admin/blogs">Manage Blogs</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Blog Posts
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBlogs}</div>
              <p className="text-xs text-muted-foreground">
                Published articles on your site
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Contact Messages
              </CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalMessages}</div>
              <p className="text-xs text-muted-foreground">
                Messages from your contact form
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Website Visitors
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+12% from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Engagement Rate
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.3%</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+5.1% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Recent Blog Posts</CardTitle>
              <CardDescription>Your latest published articles</CardDescription>
            </CardHeader>
            <CardContent>
              {stats.recentBlogs.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No blog posts yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {stats.recentBlogs.map((blog) => (
                    <div key={blog._id} className="flex items-center">
                      <div className="w-10 h-10 rounded bg-muted flex items-center justify-center mr-3">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {blog.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(blog.createdAt)}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/blogs?edit=${blog._id}`}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/admin/blogs">View all posts</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Latest contact form submissions</CardDescription>
            </CardHeader>
            <CardContent>
              {stats.recentMessages.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No messages yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {stats.recentMessages.map((message) => (
                    <div key={message._id} className="flex items-center">
                      <div className="w-10 h-10 rounded bg-muted flex items-center justify-center mr-3">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {message.name} - {message.subject || "No Subject"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(message.createdAt)}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/messages?view=${message._id}`}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/admin/messages">View all messages</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

