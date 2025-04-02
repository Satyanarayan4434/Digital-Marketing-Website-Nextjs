"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2, Calendar, User, Tag, ArrowLeft } from "lucide-react";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchBlogBySlug(slug);
    }
  }, [slug]);

  const fetchBlogBySlug = async (slug) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/blogs/slug/${slug}`);

      if (!response.ok) {
        throw new Error("Blog post not found");
      }

      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Blog Post Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="mt-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {blog.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            {formatDate(blog.createdAt)}
          </div>
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            {blog.author || "Admin"}
          </div>
          <div className="flex items-center">
            <Tag className="mr-1 h-4 w-4" />
            {blog.category}
          </div>
        </div>

        {blog.featuredImage && (
          <div className="mt-8 overflow-hidden rounded-lg">
            <img
              src={blog.featuredImage || "/placeholder.svg"}
              alt={blog.title}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg mt-8 ">
          {/* Render blog content - in a real app, you might use a rich text renderer here */}
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </div>
    </div>
  );
}
