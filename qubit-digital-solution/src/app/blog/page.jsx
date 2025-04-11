"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Search, Calendar, ArrowRight, Filter } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

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

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.FRONTEND_URL}/api/blogs`);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Blog Card Component integrated directly
  const BlogCard = ({ blog }) => {
    return (
      <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
        {/* Image container with category badge */}
        <div className="relative">
          {/* Category badge positioned absolute on the image */}
          <div className="absolute left-4 top-4 z-10">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-md">
              {blog.category}
            </span>
          </div>

          {/* Image with overlay gradient */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={
                blog.featuredImage || "/placeholder.svg?height=400&width=600"
              }
              alt={blog.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
        </div>

        {/* Content section */}
        <div className="p-5">
          {/* Date with icon */}
          <div className="mb-3 flex items-center gap-1.5 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(blog.createdAt)}</span>
          </div>

          {/* Title with hover effect */}
          <Link href={`/blog/${blog.slug}`}>
            <h3 className="mb-2 text-xl font-semibold line-clamp-2 transition-colors duration-300 group-hover:text-blue-600">
              {blog.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="mb-4 text-sm text-gray-600 line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Read more link */}
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
          >
            Read more
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Discover Our Blog
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-600 md:text-xl">
            Insights, strategies, and tips to help you succeed in digital
            marketing
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl bg-white p-4 shadow-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="border-0 pl-10 ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
            <span className="text-sm text-gray-500">
              {filteredBlogs.length}{" "}
              {filteredBlogs.length === 1 ? "article" : "articles"} found
            </span>
          </div>

          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  className={
                    selectedCategory === category
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="mt-16 rounded-xl bg-white p-8 text-center shadow-lg">
            <Search className="mx-auto h-12 w-12 text-gray-300" />
            <p className="mt-4 text-xl font-medium text-gray-700">
              No articles found
            </p>
            <p className="mt-2 text-gray-500">
              Try a different search term or category
            </p>
            <Button
              className="mt-6 bg-blue-500 hover:bg-blue-600"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <motion.div
            className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredBlogs.map((blog) => (
              <motion.div key={blog._id} variants={itemVariants}>
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
