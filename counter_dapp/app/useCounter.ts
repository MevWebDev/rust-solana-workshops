import * as anchor from "@coral-xyz/anchor";
import CounterIdl from "../../superteam-workshop-counter/target/idl/first_program.json";
import { useAppKitProvider } from "@reown/appkit/react";
import { Provider } from "@reown/appkit-adapter-solana";
import { useAppKitConnection } from "@reown/appkit/react";
import { useCallback } from "react";

export function useCounter() {
  const { walletProvider } = useAppKitProvider<Provider>("solana");

  const { connection } = useAppKitConnection();

  if (!walletProvider.publicKey || !connection) return undefined;

  const wallet: anchor.Wallet = {
    publicKey: walletProvider.publicKey,
    payer: undefined as unknown as anchor.web3.Keypair,
    signTransaction: (tx) => {
      return walletProvider.signTransaction(tx);
    },
    signAllTransactions: (tx) => {
      return walletProvider.signAllTransactions(tx);
    },
  };
  const anchorProvider = new anchor.AnchorProvider(connection, wallet);
  const program = new anchor.Program(CounterIdl, anchorProvider);

  const increment = useCallback(async () => {
    if (!program.provider.publicKey) return undefined;
    const signer = program.provider.publicKey;
    const tx = await program.methods
      .increment()
      .accounts({ signer })
      .transaction();
  }, []);
}
