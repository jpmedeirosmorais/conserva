import { ReactElement } from "react";

export interface FirebaseContextType {
  handleGetDatabase: () => void;
  data: any;
}

export interface Product {
  id: string;
  flavor: string;
  price: string;
  description: string;
  type: string;
  imageUrl: string;
}

export interface FirebaseProviderProps {
  children: ReactElement;
}
