"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  UserCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function UsersListPage() {
  const [usersData, setUsersData] = useState({ users: [], totalCount: 0 });
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null);

  // Memoize fetchUsers to prevent unnecessary re-renders
  const fetchUsers = useCallback(async (page, limit) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users?page=${page}&limit=${limit}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch users");
      }

      const data = await response.json();

      // Store debug info for troubleshooting
      setDebugInfo({
        responseReceived: true,
        hasUsers: Array.isArray(data.users) && data.users.length > 0,
        userCount: Array.isArray(data.users) ? data.users.length : 0,
        totalCount: data.totalCount || 0,
        firstUser: data.users && data.users.length > 0 ? data.users[0] : null,
      });

      setUsersData(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error.message || "An error occurred while fetching users");
      setDebugInfo({
        responseReceived: false,
        error: error.message,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers(currentPage, pageSize);
  }, [currentPage, pageSize, fetchUsers]);

  const pageCount = Math.ceil(usersData.totalCount / pageSize) || 1;

  const handlePageChange = (page) => {
    if (page < 0 || page >= pageCount) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageSizeChange = (value) => {
    setPageSize(Number(value));
    setCurrentPage(0); 
  };

  const startIndex = currentPage * pageSize + 1;
  const endIndex = Math.min(
    (currentPage + 1) * pageSize,
    usersData.totalCount || 0
  );

  const getUserProperty = (user, property, fallback = "N/A") => {
    if (!user) return fallback;

    if (property.includes(".")) {
      const parts = property.split(".");
      let value = user;

      for (const part of parts) {
        if (value && Array.isArray(value) && part.includes("[")) {
          const arrayName = part.split("[")[0];
          const index = Number.parseInt(part.split("[")[1]);
          value = value[arrayName] && value[arrayName][index];
        } else {
          value = value && value[part];
        }

        if (value === undefined || value === null) {
          return fallback;
        }
      }

      return value || fallback;
    }

    return user[property] || fallback;
  };

  const getEmail = (user) => {
    if (!user) return "No Email";

    if (user.emailAddresses && user.emailAddresses.length > 0) {
      return user.emailAddresses[0].emailAddress || "No Email";
    }

    return "No Email";
  };

  return (
    <div className="container max-w-7xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-2xl font-bold">Users List</CardTitle>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Rows per page:
            </span>
            <Select
              value={pageSize.toString()}
              onValueChange={handlePageSizeChange}
            >
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder={pageSize} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Loading users...</p>
            </div>
          ) : usersData.users && usersData.users.length > 0 ? (
            <>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Joined</TableHead>
                      {/* <TableHead className="text-right">Actions</TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usersData.users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <UserCircle className="h-6 w-6 text-muted-foreground" />
                            <span>
                              {getUserProperty(user, "firstName", "Unknown")}{" "}
                              {getUserProperty(user, "lastName", "")}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{getEmail(user)}</TableCell>
                        <TableCell>
                          {new Date(user.createdAt).toLocaleDateString()}
                        </TableCell>
                        {/* <TableCell className="text-right">
                          <Link href={`/admin/users/${user.id}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                        </TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
                <p className="text-sm text-muted-foreground">
                  Showing {startIndex} to {endIndex} of{" "}
                  {usersData.totalCount || 0} users
                </p>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePageChange(0)}
                    disabled={currentPage === 0}
                  >
                    <ChevronsLeft className="h-4 w-4" />
                    <span className="sr-only">First page</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous page</span>
                  </Button>

                  <div className="flex items-center gap-1 mx-2">
                    {Array.from({ length: Math.min(5, pageCount) }, (_, i) => {
                      let pageNum;
                      if (pageCount <= 5) {
                        pageNum = i;
                      } else if (currentPage < 2) {
                        pageNum = i;
                      } else if (currentPage > pageCount - 3) {
                        pageNum = pageCount - 5 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <Button
                          key={pageNum}
                          variant={
                            currentPage === pageNum ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => handlePageChange(pageNum)}
                          className="w-9 h-9"
                        >
                          {pageNum + 1}
                        </Button>
                      );
                    })}

                    {pageCount > 5 && currentPage < pageCount - 3 && (
                      <>
                        <span className="mx-1">...</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(pageCount - 1)}
                          className="w-9 h-9"
                        >
                          {pageCount}
                        </Button>
                      </>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pageCount - 1}
                  >
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next page</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePageChange(pageCount - 1)}
                    disabled={currentPage === pageCount - 1}
                  >
                    <ChevronsRight className="h-4 w-4" />
                    <span className="sr-only">Last page</span>
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <UserCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No users found</h3>
              <p className="text-sm text-muted-foreground mt-1">
                There are no users to display at the moment.
              </p>

              {/* Debug information - remove in production */}
              {debugInfo && (
                <div className="mt-6 p-4 border rounded bg-gray-50 text-left w-full max-w-xl">
                  <h4 className="font-medium mb-2">Debug Information:</h4>
                  <pre className="text-xs overflow-auto p-2 bg-gray-100 rounded">
                    {JSON.stringify(debugInfo, null, 2)}
                  </pre>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => fetchUsers(currentPage, pageSize)}
                  >
                    Retry Fetch
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
