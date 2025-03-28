"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    occupation: "",
    password: "",
  });

  const [verifying, setVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      setLoading(true);
      setError("");

      await signUp.create({
        emailAddress: formData.emailAddress,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerifying(true);
      setLoading(false);
    } catch (err) {
      console.error("Sign up error:", err);
      setError(err.message || "Something went wrong during sign up");
      setLoading(false);
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();

    if (!isLoaded || !verificationCode) return;

    try {
      setLoading(true);
      setError("");

      // Verify the email code
      let completeSignUp;
      try {
        completeSignUp = await signUp.attemptEmailAddressVerification({
          code: verificationCode,
        });
      } catch (verificationErr) {
        console.error("Verification error details:", verificationErr);

        // Check if the error is because it's already verified
        if (
          verificationErr.message &&
          verificationErr.message.includes("already been verified")
        ) {
          // If already verified, try to get the active session
          const { createdSessionId } = signUp;

          if (createdSessionId) {
            await setActive({ session: createdSessionId });

            redirectToServicesWithData();
            return;
          } else {
            setError("Email already verified. Please sign in instead.");
            setTimeout(() => {
              router.push("/signin");
            }, 2000);
            return;
          }
        } else {
          throw verificationErr;
        }
      }

      if (completeSignUp.status !== "complete") {
        setError("Email verification failed. Please try again.");
        setLoading(false);
        return;
      }

      await setActive({ session: completeSignUp.createdSessionId });

      redirectToServicesWithData();
    } catch (err) {
      console.error("Verification error:", err);
      setError(err.message || "Verification failed");
      setLoading(false);
    }
  };

  const redirectToServicesWithData = () => {
    const queryParams = new URLSearchParams();

    if (formData.phoneNumber) {
      queryParams.append("phoneNumber", formData.phoneNumber);
    }

    if (formData.occupation) {
      queryParams.append("occupation", formData.occupation);
    }

    if(formData.firstName) {
      queryParams.append("firstName", formData.firstName);
    }

    if(formData.lastName) {
      queryParams.append("lastName", formData.lastName);
    } 

    router.push(`/services?${queryParams.toString()}`);
  };

  const handleSocialSignUp = async (provider) => {
    if (!isLoaded) return;

    try {
      await signUp.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/services", 
      });
    } catch (err) {
      setError(err.message || `Failed to sign up with ${provider}`);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription>
            {verifying
              ? "Enter the verification code sent to your email"
              : "Sign up to get started with our platform"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {verifying ? (
            <form onSubmit={handleVerification} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="verificationCode">Verification Code</Label>
                <Input
                  id="verificationCode"
                  name="verificationCode"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter the code sent to your email"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify Email"
                )}
              </Button>
            </form>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emailAddress">Email</Label>
                  <Input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    name="occupation"
                    type="text"
                    value={formData.occupation}
                    onChange={handleChange}
                    placeholder="Software Developer"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => handleSocialSignUp("oauth_google")}
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => handleSocialSignUp("oauth_facebook")}
                >
                  Facebook
                </Button>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/signin" className="text-primary hover:underline">
              Sign in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
