import Link from "next/link";
import { ReactElement } from "react";
import { IconFacebook, IconInstagram, IconWhatsapp } from "../common/assets/icons";
import { Footer, Navbar } from "../components";
import { FirebaseProvider } from "./useDatabase";
import { Media } from "../components/Footer/interfaces";

interface AppProviderProps {
  children: ReactElement;
}

const medias: Media[] = [
  {
    name: "W",
    link: "https://wa.me/5584920009634",
    icon: <IconWhatsapp />,
  },
  {
    name: "I",
    link: "https://www.instagram.com/conservaemfamilia/",
    icon: <IconInstagram />,
  },
];

const itemsProps = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Produtos",
    link: "produtos",
  },
];
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
