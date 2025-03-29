"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Pagination({ currentPage, pageCount, onPageChange }) {
  // Handle page change with boundary checks
  const handlePageChange = (page) => {
    if (page < 0 || page >= pageCount) return;
    onPageChange(page);
  };

  // Create an array of visible page numbers
  const getVisiblePages = () => {
    const visiblePages = [];

    // For small number of pages, show all
    if (pageCount <= 5) {
      for (let i = 0; i < pageCount; i++) {
        visiblePages.push(i);
      }
      return visiblePages;
    }

    // Always include current page
    visiblePages.push(currentPage);

    // Add pages before current page
    for (let i = 1; i <= 2; i++) {
      if (currentPage - i >= 0) {
        visiblePages.unshift(currentPage - i);
      }
    }

    // Add pages after current page
    for (let i = 1; i <= 2; i++) {
      if (currentPage + i < pageCount) {
        visiblePages.push(currentPage + i);
      }
    }

    // If we have space at the beginning, add more at the end
    while (
      visiblePages.length < 5 &&
      visiblePages[visiblePages.length - 1] < pageCount - 1
    ) {
      visiblePages.push(visiblePages[visiblePages.length - 1] + 1);
    }

    // If we have space at the end, add more at the beginning
    while (visiblePages.length < 5 && visiblePages[0] > 0) {
      visiblePages.unshift(visiblePages[0] - 1);
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
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

      {visiblePages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(page)}
          className="w-9 h-9"
        >
          {page + 1}
        </Button>
      ))}

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
  );
}
