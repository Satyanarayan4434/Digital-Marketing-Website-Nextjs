"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/router";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      // Extract unique categories
      const uniqueCategories = [
        "All",
        ...new Set(blogs.map((blog) => blog.category)),
      ];
      setCategories(uniqueCategories);

      // Filter blogs based on search term and category
      let filtered = blogs;

      if (searchTerm) {
        filtered = filtered.filter(
          (blog) =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedCategory !== "All") {
        filtered = filtered.filter(
          (blog) => blog.category === selectedCategory
        );
      }

      setFilteredBlogs(filtered);
    }
  }, [blogs, searchTerm, selectedCategory]);

  // Update the fetchBlogs function to ensure it's using the correct API endpoint
  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/blogs");

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data.blogs || []);
      setFilteredBlogs(data.blogs || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Blog
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights, strategies, and tips to help you succeed in digital
            marketing
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600">
              No blog posts found. Please try a different search term or
              category.
            </p>
          </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <Card key={blog._id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={
                      blog.featuredImage ||
                      "/placeholder.svg?height=400&width=600"
                    }
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(blog.createdAt)}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 hover:text-blue-600">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {blog.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/blog/${blog.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <button onClick={() => router.push("/admin")} className="mt-10">
          Admin Go To
        </button>
      </div>
    </div>
  );
}
