import { ReactElement } from "react";

export interface FirebaseContextType {
  handleAddNewProduct: (product: Product) => void;
  handleGetDatabase: () => void;
  data: Array<any>;
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
