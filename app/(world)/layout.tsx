import type { ReactNode } from "react";
import { WorldShell } from "@/components/world/world-shell";

export default function WorldLayout({ children }: { children: ReactNode }) {
  return <WorldShell>{children}</WorldShell>;
}
