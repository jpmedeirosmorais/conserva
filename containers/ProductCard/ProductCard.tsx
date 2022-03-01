import * as S from "./styles";
import { ProductCardProps } from "./interfaces";
import { Button } from "../../components";
import { DemoImage, Type, Flavor, Description, Price } from "./components";

export const ProductCard = ({products} : ProductCardProps) => (
  <S.Content>
    {products.map(product => (
      <S.Card key={product.id}>
        <DemoImage image={product.image} />
        <Type
          type={product.type}
        />
        <Flavor flavor={product.flavor}/>
        <Description description={product.description}/>
        <Price price={product.price}/>
        <Button label="Comprar"/>
      </S.Card>
    ))}
  </S.Content>
)