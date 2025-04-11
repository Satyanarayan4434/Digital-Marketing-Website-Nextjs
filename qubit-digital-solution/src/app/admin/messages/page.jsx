"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useSearchParams, redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  Trash2,
  MoreVertical,
  Eye,
  Mail,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";
import DashboardLayout from "@/components/admin/dashboard-layout";

export default function MessagesPage() {
  const { user, isLoaded } = useUser();
  const searchParams = useSearchParams();
  const viewId = searchParams.get("view");

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);

  // Redirect if not logged in
  if (isLoaded && !user) {
    redirect("/sign-in");
  }

  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`);

      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }

      const data = await response.json();
      setMessages(data.messages || []);
      setFilteredMessages(data.messages || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Failed to load contact messages");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (viewId && messages.length > 0) {
      const message = messages.find((m) => m._id === viewId);
      if (message) {
        handleViewClick(message);
      }
    }
  }, [viewId, messages]);

  useEffect(() => {
    if (messages.length > 0) {
      let filtered = [...messages];

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(
          (message) =>
            message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            message.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            message.message.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Filter by tab
      if (activeTab !== "all") {
        filtered = filtered.filter((message) => message.status === activeTab);
      }

      setFilteredMessages(filtered);
    }
  }, [messages, searchTerm, activeTab]);

  const handleViewClick = (message) => {
    setCurrentMessage(message);
    setIsViewDialogOpen(true);

    // If message is new, mark it as read
    if (message.status === "new") {
      updateMessageStatus(message._id, "read");
    }
  };

  const handleDeleteClick = (message) => {
    setCurrentMessage(message);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteMessage = async () => {
    try {
      setIsSubmitting(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact/${currentMessage._id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete message");
      }

      await fetchMessages();
      toast.success("Message deleted successfully");
      setIsDeleteDialogOpen(false);
    } catch (error) {
      console.error("Error deleting message:", error);
      toast.error(error.message || "Failed to delete message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateMessageStatus = async (id, status) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update message status");
      }

      // Update local state
      setMessages((prevMessages) =>
        prevMessages.map((msg) => (msg._id === id ? { ...msg, status } : msg))
      );

      // If the current message is being viewed, update it
      if (currentMessage && currentMessage._id === id) {
        setCurrentMessage((prev) => ({ ...prev, status }));
      }

      toast.success(`Message marked as ${status}`);
    } catch (error) {
      console.error("Error updating message status:", error);
      toast.error("Failed to update message status");
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "read":
        return "bg-yellow-100 text-yellow-800";
      case "replied":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (!isLoaded) {
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
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Contact Messages</h1>
            <p className="text-muted-foreground">
              Manage messages from your contact form
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full sm:w-auto"
          >
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="read">Read</TabsTrigger>
              <TabsTrigger value="replied">Replied</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {isLoading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="text-center p-8 border rounded-lg bg-muted/20">
            <p className="text-muted-foreground">No messages found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMessages.map((message) => (
              <Card
                key={message._id}
                className={
                  message.status === "new" ? "border-blue-300 shadow-md" : ""
                }
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge
                        className={getStatusColor(message.status)}
                        variant="outline"
                      >
                        {message.status.charAt(0).toUpperCase() +
                          message.status.slice(1)}
                      </Badge>
                      <CardTitle className="mt-2 line-clamp-1">
                        {message?.serviceType || "No Subject"}
                      </CardTitle>
                      <CardDescription>From: {message.name}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleViewClick(message)}
                        >
                          <Eye className="mr-2 h-4 w-4" /> View
                        </DropdownMenuItem>
                        {message.status !== "read" && (
                          <DropdownMenuItem
                            onClick={() =>
                              updateMessageStatus(message._id, "read")
                            }
                          >
                            <CheckCircle className="mr-2 h-4 w-4" /> Mark as
                            Read
                          </DropdownMenuItem>
                        )}
                        {message.status !== "replied" && (
                          <DropdownMenuItem
                            onClick={() =>
                              updateMessageStatus(message._id, "replied")
                            }
                          >
                            <Mail className="mr-2 h-4 w-4" /> Mark as Replied
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem
                          onClick={() => handleDeleteClick(message)}
                          className="text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Mail className="mr-1 h-4 w-4" />
                    <span className="truncate">{message.email}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <Calendar className="mr-1 h-3 w-3" />
                    {formatDate(message.createdAt)}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {message.message}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewClick(message)}
                  >
                    <Eye className="mr-2 h-4 w-4" /> View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteClick(message)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* View Dialog */}
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            {currentMessage && (
              <>
                <DialogHeader>
                  <DialogTitle>
                    {currentMessage.serviceType || "No Subject"}
                  </DialogTitle>
                  <DialogDescription>
                    From: {currentMessage.name} ({currentMessage.email})
                    {currentMessage.phone &&
                      ` • Phone: ${currentMessage.phone}`}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Received: {formatDate(currentMessage.createdAt)}
                  </div>
                  <Badge
                    className={getStatusColor(currentMessage.status)}
                    variant="outline"
                  >
                    {currentMessage.status.charAt(0).toUpperCase() +
                      currentMessage.status.slice(1)}
                  </Badge>
                </div>
                <div className="mt-4 border rounded-md p-4 whitespace-pre-wrap bg-gray-50">
                  {currentMessage.message}
                </div>
                <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsViewDialogOpen(false)}
                    >
                      Close
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        setIsViewDialogOpen(false);
                        handleDeleteClick(currentMessage);
                      }}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    {currentMessage.status !== "read" && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          updateMessageStatus(currentMessage._id, "read")
                        }
                      >
                        <CheckCircle className="mr-2 h-4 w-4" /> Mark as Read
                      </Button>
                    )}
                    {currentMessage.status !== "replied" && (
                      <Button
                        onClick={() =>
                          updateMessageStatus(currentMessage._id, "replied")
                        }
                      >
                        <Mail className="mr-2 h-4 w-4" /> Mark as Replied
                      </Button>
                    )}
                  </div>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Delete Dialog */}
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                {currentMessage && (
                  <>
                    Are you sure you want to delete this message from{" "}
                    {currentMessage.name}? This action cannot be undone.
                  </>
                )}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleDeleteMessage}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
