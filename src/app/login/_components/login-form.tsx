"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sign in with a magic link
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Enter your email address and we'll send you a magic link to sign in.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="space-y-4">
                <Label className="sr-only" htmlFor="email">
                  Email address
                </Label>
                <Input
                  id="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                  {...form.register("email", { required: true })}
                />
              </div>
              <Button className="w-full" type="submit">
                Send magic link
              </Button>
            </form>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              We'll send you a magic link to sign in. No password required.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
