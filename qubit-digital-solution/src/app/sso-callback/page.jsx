"use client";

import { useEffect } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function SSOCallbackPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    async function handleCallback() {
      try {
        // Check the email verification strategy
        if (
          signUp.verifications.email_address?.strategy !== "email_code" ||
          signUp.verifications.email_address?.status === "verified"
        ) {
          // For social sign ups, email is already verified
          await setActive({ session: signUp.createdSessionId });
          router.push("/services");
          return;
        }
        
        // If email_code strategy is in place, attempt verification using the code
        const result = await signUp.attemptEmailAddressVerification();

        if (result.status === "complete") {
          await setActive({ session: result.createdSessionId });
          router.push("/services");
        } else {
          throw new Error("Email verification failed. Please try again.");
        }
      } catch (err) {
        console.error("Error during SSO callback:", err);
        router.push("/signup?error=sso-callback-failed");
      }
    }

    handleCallback();
  }, [isLoaded, signUp, setActive, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
      <p className="text-muted-foreground">Completing your sign up...</p>
    </div>
  );
}
