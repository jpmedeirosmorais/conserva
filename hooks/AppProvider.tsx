import Link from "next/link";
import { ReactElement } from "react";
import { IconFacebook, IconInstagram } from "../common/assets/icons";
import { Footer, Navbar } from "../components";
import { FirebaseProvider } from "./useDatabase";
import { Media } from "../components/Footer/interfaces";

interface AppProviderProps {
  children: ReactElement;
}

const medias : Media[] = [
  {
    name: "F",
    link: "https://facebook.com",
    icon: <IconFacebook />,
  },
  {
    name: "I",
    link: "https://instagram.com",
    icon: <IconInstagram />,
  },
];

const itemsProps = ["Home", "About", "Contact", "Login"];
export function AppProvider({ children }: AppProviderProps) {
  return (
    <FirebaseProvider>
      <>
        <Navbar items={itemsProps} />
        {children}
        <Footer medias={medias} />
      </>
    </FirebaseProvider>
  );
}
