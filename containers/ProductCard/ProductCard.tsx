import * as S from "./styles";
import { ProductCardProps } from "./interfaces";
import { Button } from "../../components";
import { DemoImage, Type, Flavor, Description, Price } from "./components";

export const ProductCard = ({ product }: ProductCardProps) => (
  <S.Content>
    <DemoImage image={product.image} />
    <S.Body>
      <S.TypeContent>
        <Type type={product.type} />
      </S.TypeContent>

      <S.FlavorContent>
        <Flavor flavor={product.flavor} />
      </S.FlavorContent>

      <S.DescriptionContent>
        <Description description={product.description} />
      </S.DescriptionContent>

      <S.PriceContent>
        <Price price={product.price} />
      </S.PriceContent>

      <Button label="Comprar" />
    </S.Body>
  </S.Content>
);