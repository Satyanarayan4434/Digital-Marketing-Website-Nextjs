"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function ProfileUpdater() {
  const { isLoaded, isSignedIn } = useUser();
  const searchParams = useSearchParams();
  const {user} = useUser()
  // Get additional user data from query params
  const phoneNumber = searchParams.get("phoneNumber");
  const occupation = searchParams.get("occupation");
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");

  // Update user profile with additional data if available
  useEffect(() => {
    const updateUserProfile = async () => {
      // Only proceed if there's data to update and user is loaded and signed in
      if (!isLoaded || !isSignedIn || (!phoneNumber && !occupation)) {
        return;
      }
      console.log("Updating user profile...", phoneNumber, occupation);
      try {
        console.log("Calling update API...");

        // Prepare the data to send to the API
        const updateData = {};
        if (phoneNumber) updateData.phoneNumber = phoneNumber;
        if (occupation) updateData.occupation = occupation;
        if (firstName) updateData.firstName = firstName;
        if (lastName) updateData.lastName = lastName;
        if (user?.id) updateData.userId = user?.id;

        // Call the update API
        const response = await fetch(`${process.env.FRONTEND_URL}/api/update-user-profile`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to update profile");
        }

        const result = await response.json();
        console.log("API response:", result);

        // Clear the query parameters from the URL without refreshing the page
        const url = new URL(window.location.href);
        url.searchParams.delete("phoneNumber");
        url.searchParams.delete("occupation");
        window.history.replaceState({}, "", url);
      } catch (error) {
        console.error("Error updating user profile:", error);
      }
    };

    updateUserProfile();
  }, [isLoaded, isSignedIn, phoneNumber, occupation]);

  // This component doesn't render anything visible
  return null;
}
