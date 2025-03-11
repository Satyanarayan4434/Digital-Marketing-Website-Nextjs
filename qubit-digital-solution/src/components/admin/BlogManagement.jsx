"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2, Plus } from "lucide-react";

// Mock data - in a real app, this would come from your database
const initialPosts = [
  {
    id: 1,
    title: "10 SEO Strategies to Boost Your Website Ranking",
    excerpt:
      "Learn the top SEO strategies that can help improve your website's visibility and ranking on search engines.",
    content: "Full content would go here...",
    date: new Date("2023-05-15"),
    author: "John Doe",
    slug: "10-seo-strategies",
    category: "SEO",
  },
  {
    id: 2,
    title: "The Power of Social Media Marketing for Small Businesses",
    excerpt:
      "Discover how small businesses can leverage social media marketing to reach their target audience and grow their brand.",
    content: "Full content would go here...",
    date: new Date("2023-05-10"),
    author: "Jane Smith",
    slug: "social-media-marketing-small-businesses",
    category: "Social Media",
  },
  {
    id: 3,
    title: "Email Marketing Best Practices for 2023",
    excerpt:
      "Stay ahead of the curve with these email marketing best practices that will help you improve open rates and conversions.",
    content: "Full content would go here...",
    date: new Date("2023-05-05"),
    author: "Mike Johnson",
    slug: "email-marketing-best-practices-2023",
    category: "Email Marketing",
  },
];

export default function BlogManagement() {
  const [posts, setPosts] = useState(initialPosts);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    slug: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      ...formData,
      date: new Date(),
      author: "Admin User", // In a real app, this would be the current user
    };

    setPosts([...posts, newPost]);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      slug: "",
    });
    setIsAddDialogOpen(false);
  };

  const handleEditClick = (post) => {
    setCurrentPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      slug: post.slug,
    });
    setIsEditDialogOpen(true);
  };

  const handleEditPost = () => {
    const updatedPosts = posts.map((post) =>
      post.id === currentPost.id ? { ...post, ...formData } : post
    );

    setPosts(updatedPosts);
    setIsEditDialogOpen(false);
  };

  const handleDeleteClick = (post) => {
    setCurrentPost(post);
    setIsDeleteDialogOpen(true);
  };

  const handleDeletePost = () => {
    const updatedPosts = posts.filter((post) => post.id !== currentPost.id);
    setPosts(updatedPosts);
    setIsDeleteDialogOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Blog Post</DialogTitle>
              <DialogDescription>
                Create a new blog post for your website. Click save when you're
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="slug" className="text-right">
                  Slug
                </Label>
                <Input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="excerpt" className="text-right">
                  Excerpt
                </Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="content" className="text-right">
                  Content
                </Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="col-span-3"
                  rows={10}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddPost}>
                Save Post
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                {post.category} • {post.date.toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEditClick(post)}
              >
                <Pencil className="mr-2 h-4 w-4" /> Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDeleteClick(post)}
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Blog Post</DialogTitle>
            <DialogDescription>
              Make changes to the blog post. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-title" className="text-right">
                Title
              </Label>
              <Input
                id="edit-title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-slug" className="text-right">
                Slug
              </Label>
              <Input
                id="edit-slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-category" className="text-right">
                Category
              </Label>
              <Input
                id="edit-category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-excerpt" className="text-right">
                Excerpt
              </Label>
              <Textarea
                id="edit-excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-content" className="text-right">
                Content
              </Label>
              <Textarea
                id="edit-content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="col-span-3"
                rows={10}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleEditPost}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this blog post? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeletePost}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
