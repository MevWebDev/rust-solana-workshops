"use client";

import { initializeAppKit } from "./reown";
import { AppKitButton, useAppKitAccount } from "@reown/appkit/react";

export default function Home() {
  if (typeof window !== undefined) {
    initializeAppKit();
  }

  const { address } = useAppKitAccount();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Home
      <p>{address}</p>
      <AppKitButton />
    </div>
  );
}
