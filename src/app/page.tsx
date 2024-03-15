"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

const isAuth = false;
export default function Home() {
  if (!isAuth) {
    redirect("/login");
  }
  const router = useRouter();
  return (
    <main>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Button
            variant="secondary"
            onClick={() => {
              router.push("/login");
            }}
          >
            Go Login
          </Button>
        </li>
      </ul>
    </main>
  );
}
