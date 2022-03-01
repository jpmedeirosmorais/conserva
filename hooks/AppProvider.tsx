import Link from "next/link";
import { ReactElement } from "react";
import { FirebaseProvider } from "./useDatabase";

interface AppProviderProps {
  children: ReactElement;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <FirebaseProvider>
      <>
        <h1>
          <Link href="/">Home </Link>
        </h1>
        {children}
      </>
    </FirebaseProvider>
  );
}
