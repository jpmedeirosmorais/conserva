import { Dispatch, ReactElement, SetStateAction } from "react";

export interface FirebaseContextType {
  handleDeleteProduct: (handleKey: string) => void;
  handleAddNewProduct: (product: Product) => void;
  handleUpDateProduct: (newProduct: Product, keyProduct: string) => void;
  handleGetDatabase: () => void;
  setKeyProduct: Dispatch<SetStateAction<string>>;
  keyProduct: string;
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
