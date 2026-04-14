"use client";

import Link from "next/link";
import { Mail, Lock, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthFormCard } from "@/components/auth-form-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="w-full bg-(--bg-foreground)">
      <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-[1100px] items-center justify-center px-6 py-10">
        <AuthFormCard
          title="Welcome Back"
          description="Access your professional currency analysis suite."
          formId="sign-in-form"
          submitLabel="Sign In"
          cardClassName="max-w-[560px] p-6 md:p-12"
          headerClassName="space-y-2 text-center"
          footer={
            <>
              <div className="flex w-full items-center gap-4">
                <span className="h-px flex-1 bg-(--border-detail)" />
                <span className="text-xs font-bold tracking-[0.2em] text-(--secondary-dark)">
                  OR CONTINUE WITH
                </span>
                <span className="h-px flex-1 bg-(--border-detail)" />
              </div>

              <div className="grid w-full grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="secondary"
                  className="h-12 cursor-pointer bg-(--border-detail) text-(--secondary-dark)"
                >
                  <Mail className="mr-2 size-4" />
                  Google
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="h-12 cursor-pointer bg-(--border-detail) text-(--secondary-dark)"
                >
                  <Apple className="mr-2 size-4" />
                  Apple
                </Button>
              </div>

              <p className="text-center text-(--secondary-dark)">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-(--primary-dark) hover:underline"
                >
                  Create an account
                </Link>
              </p>

              <p className="max-w-[360px] text-center text-xs text-(--secondary-dark)">
                By signing in, you agree to our{" "}
                <Link href="#" className="underline underline-offset-4">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline underline-offset-4">
                  Privacy Policy
                </Link>
                .
              </p>
            </>
          }
        >
          <div className="grid gap-2">
            <Label
              htmlFor="email"
              className="font-bold text-[12px] text-(--secondary-dark)"
            >
              EMAIL ADDRESS
            </Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-(--secondary-dark)" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="min-h-[55px] bg-(--border-detail) pl-12"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label
                htmlFor="password"
                className="font-bold text-[12px] text-(--secondary-dark)"
              >
                PASSWORD
              </Label>
              <Link
                href="#"
                className="ml-auto text-sm text-(--primary-dark) underline-offset-4 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-(--secondary-dark)" />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="........"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="min-h-[55px] bg-(--border-detail) pl-12"
              />
            </div>
          </div>
        </AuthFormCard>
      </div>
    </main>
  );
}
