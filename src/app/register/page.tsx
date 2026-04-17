"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AuthFormCard } from "@/components/auth-form-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = await signUp.email({
        name,
        email,
        password,
      });

      if (data.error) {
        setError(data.error.message ?? "Erro ao cadastrar");
      } else {
        const profileResponse = await fetch("/api/profiles/me", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        });

        if (!profileResponse.ok) {
          setError("Conta criada, mas houve erro ao criar o perfil.");
          return;
        }

        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full bg-(--bg-foreground)">
      <div className="grid px-6 py-10 md:grid-cols-2 md:pt-8 md:px-16 md:pb-13.75 gap-4">
        <article className="w-full pb-10">
          <Badge className="bg-(--tag-blue) text-(--tag-blue-text) dark:bg-sky-950 dark:text-sky-300 text-[12px] font-bold mb-[13px]">
            INSTITUTIONAL GRADE
          </Badge>

          <h1 className="text-4xl font-extrabold text-(--title-black) leading-[45px]">
            Architect your
            <br className="md:hidden" />
            <span className="text-(--primary-dark) md: ml-2">
              financial future
            </span>
            <span className="hidden md:block">with precision.</span>
          </h1>
          <p className="pt-3 text-(--secondary-dark)">
            Join a premium community of investors and manage your global assets
            with editorial precision.
          </p>
        </article>

        <div>
          <AuthFormCard
            title="Create Account"
            description="Enter your details to begin your membership."
            formId="register-form"
            submitLabel={loading ? "Creating..." : "Create Account"}
            submitDisabled={loading}
            onSubmit={handleSubmit}
            headerClassName="pb-8 hidden md:block"
            footerClassName="flex-col gap-2"
            formClassName="space-y-0"
            footer={
              <div className="flex items-center justify-center w-full">
                <Link
                  href="/sign-in"
                  className="text-sm font-medium text-(--primary-dark) hover:underline"
                >
                  Sign In
                </Link>
              </div>
            }
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label
                  className="font-bold text-[12px] text-(--secondary-dark)"
                  htmlFor="name"
                >
                  FULL NAME
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="min-h-[55px] bg-(--border-detail)"
                />
              </div>
              <div className="grid gap-2">
                <Label
                  className=" font-bold text-[12px] text-(--secondary-dark)"
                  htmlFor="email"
                >
                  WORK EMAIL
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="John@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="min-h-[55px] bg-(--border-detail)"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label
                    className="font-bold text-[12px] text-(--secondary-dark)"
                    htmlFor="password"
                  >
                    PASSWORD
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="min-h-[55px] bg-(--border-detail)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-[10px] text-(--secondary-dark)">
                  Must be at least 8 characters with one special symbol.
                </p>
              </div>
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
            </div>
          </AuthFormCard>
        </div>
      </div>
    </main>
  );
}
