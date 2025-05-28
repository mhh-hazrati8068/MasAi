"use client";
import BaseLayout from "@/components/layouts/base";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function RootBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
