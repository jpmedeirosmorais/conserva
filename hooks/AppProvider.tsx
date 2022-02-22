import { ReactElement } from "react";
import { FirebaseProvider } from "./useDatabase";

interface AppProviderProps {
  children: ReactElement;
}

export function AppProvider({ children }: AppProviderProps) {
  return <FirebaseProvider>{children}</FirebaseProvider>;
};
