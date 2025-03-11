"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogManagement from "@/components/admin/BlogManagement";
import UserManagement from "@/components/admin/UserManagement";

export default function AdminDashboard({ user }) {
  const [activeTab, setActiveTab] = useState("blog");

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Welcome back, {user.firstName || "Admin"}! Manage your digital
            marketing platform.
          </p>
        </div>

        <div className="mt-10">
          <Tabs defaultValue="blog" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="blog">Blog Management</TabsTrigger>
              <TabsTrigger value="users">User Management</TabsTrigger>
            </TabsList>
            <TabsContent value="blog" className="mt-6">
              <BlogManagement />
            </TabsContent>
            <TabsContent value="users" className="mt-6">
              <UserManagement />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
