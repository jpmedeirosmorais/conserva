import { Dispatch, ReactElement, SetStateAction } from "react";

export interface FirebaseContextType {
  handleDeleteProduct: (handleKey: string) => void;
  handleAddNewProduct: (product: Product) => void;
  handleUpDateProduct: (newProduct: Product, oldProduct: Product) => void;
  handleGetDatabase: () => void;
  setActualProduct: Dispatch<SetStateAction<Product>>;
  actualProduct: Product;
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
