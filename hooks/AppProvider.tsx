import Link from "next/link";
import { ReactElement } from "react";
import { IconFacebook, IconInstagram } from "../common/assets/icons";
import { Footer, Navbar } from "../components";
import { FirebaseProvider } from "./useDatabase";

interface AppProviderProps {
  children: ReactElement;
}

const items = [
  "Home",
  "About",
  "Contact",
  "Login",
]
export function AppProvider({ children }: AppProviderProps) {
  return (
    <FirebaseProvider>
      <>
        <Navbar items={items}/>
        {children}
      </>
    </FirebaseProvider>
  );
}
