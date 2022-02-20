import { ReactElement } from "react";
import { DatabaseProvider } from "./useDatabase";

interface AppProviderProps {
  children: ReactElement;
}

export function AppProvider({ children }: AppProviderProps) {
  return <DatabaseProvider>{children}</DatabaseProvider>;
};
