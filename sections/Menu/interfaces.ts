export interface MenuProps {
  products: Product[];
  texts: {
    header: string;
    content: {
      title: string;
      subtitle: string;
      details: string;
    };
  };
}

interface Product {
  image: string;
  type: string;
  flavor: string;
  description: string;
  price: string;
  id: number;
}
