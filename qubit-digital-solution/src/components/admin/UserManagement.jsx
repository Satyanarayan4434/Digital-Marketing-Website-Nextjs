"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserCog, UserMinus } from "lucide-react";

// Mock data - in a real app, this would come from Clerk or your database
const initialUsers = [
  {
    id: "user_1",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    createdAt: new Date("2023-01-15"),
  },
  {
    id: "user_2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    createdAt: new Date("2023-02-20"),
  },
  {
    id: "user_3",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "user",
    createdAt: new Date("2023-03-10"),
  },
  {
    id: "user_4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: "user",
    createdAt: new Date("2023-04-05"),
  },
];

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleRoleClick = (user) => {
    setCurrentUser(user);
    setIsRoleDialogOpen(true);
  };

  const handleChangeRole = () => {
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id
        ? { ...user, role: user.role === "admin" ? "user" : "admin" }
        : user
    );

    setUsers(updatedUsers);
    setIsRoleDialogOpen(false);
  };

  const handleDeleteClick = (user) => {
    setCurrentUser(user);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteUser = () => {
    const updatedUsers = users.filter((user) => user.id !== currentUser.id);
    setUsers(updatedUsers);
    setIsDeleteDialogOpen(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Role:</span>
                <Badge
                  variant={user.role === "admin" ? "default" : "secondary"}
                >
                  {user.role}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Joined: {user.createdAt.toLocaleDateString()}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleRoleClick(user)}
              >
                <UserCog className="mr-2 h-4 w-4" /> Change Role
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDeleteClick(user)}
              >
                <UserMinus className="mr-2 h-4 w-4" /> Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Change Role Dialog */}
      <Dialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Change User Role</DialogTitle>
            <DialogDescription>
              {currentUser && (
                <>
                  Are you sure you want to change {currentUser.name}'s role from{" "}
                  <Badge
                    variant={
                      currentUser.role === "admin" ? "default" : "secondary"
                    }
                  >
                    {currentUser.role}
                  </Badge>{" "}
                  to{" "}
                  <Badge
                    variant={
                      currentUser.role !== "admin" ? "default" : "secondary"
                    }
                  >
                    {currentUser.role === "admin" ? "user" : "admin"}
                  </Badge>
                  ?
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsRoleDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleChangeRole}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete User Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Remove User</DialogTitle>
            <DialogDescription>
              {currentUser && (
                <>
                  Are you sure you want to remove {currentUser.name} (
                  {currentUser.email})? This action cannot be undone.
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
            <Button variant="destructive" onClick={handleDeleteUser}>
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
