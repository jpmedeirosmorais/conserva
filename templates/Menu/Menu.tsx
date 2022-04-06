import { MenuProps } from "./interfaces";
import { ProductCard } from "../../containers/ProductCard";
import { GroupMessage } from "../../components";
import * as S from "./styles";

const content = {
  title: "Produtos",
  subtitle: "Compotas, geléias e pimentas",
  details: ""
}

export const Menu = ({ products }: MenuProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.MessageSection>ARTESANAL E COM AMOR</S.MessageSection>
        <GroupMessage content={content}/>
      </S.Header>

      <S.Products>
      {products.map((product) => (
        <S.ProductContainer key={product.id}>
          <ProductCard product={product} />
        </S.ProductContainer>
      ))}
      </S.Products>
    </S.Container>
  );
};
