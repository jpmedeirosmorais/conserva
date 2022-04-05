export interface MenuProps {
  products: Product[];
}

interface Product {
  image: string;
  type: string;
  flavor: string;
  description: string;
  price: string;
  id: number;
}
