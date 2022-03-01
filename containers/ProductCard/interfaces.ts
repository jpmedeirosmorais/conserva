export interface ProductCardProps {
  product: Product;
}

interface Product {
  image: string;
  type: string;
  flavor: string;
  description: string;
  price: string;
  id: number;
}
