// App.tsx
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solanaDevnet } from "@reown/appkit/networks";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter();

// 1. Get projectId from https://dashboard.reown.com
const projectId = "ed20be6fbf9ac49f2caad69579b3e49d";

// 2. Create a metadata object - optional
const metadata = {
  name: "AppKit",
  description: "AppKit Solana Example",
  url: "http://localhost:3000", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Create modal
export function initializeAppKit() {
  createAppKit({
    adapters: [solanaWeb3JsAdapter],
    networks: [solanaDevnet],
    metadata: metadata,
    projectId,
    features: {
      analytics: false, // Optional - defaults to your Cloud configuration
    },
  });
}
