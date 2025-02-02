"use client";

import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

type Props = {
  title?: string,
  className?: string,
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
} & ButtonHTMLAttributes<HTMLButtonElement>;

function BackButton({ title, className, variant, ...props }: Props) {
  const router = useRouter();

  return (
    <Button
      className={className}
      variant={variant}
      onClick={() => router.back()}
      title={title}
      {...props}
    >
      {title || "Back"}
    </Button>
  )
}

export default BackButton
