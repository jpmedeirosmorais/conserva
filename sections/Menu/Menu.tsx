import { MenuProps } from "./interfaces";
import { ProductCard } from "../../containers/ProductCard";
import { GroupMessage } from "../../components";
import * as S from "./styles";

export const Menu = ({ products, texts }: MenuProps) => {
  return (
    <S.Container>
      <S.Header>
        {texts.header !== "" && (
          <S.MessageSection>{texts.header}</S.MessageSection>
        )}
        <GroupMessage content={texts.content} />
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
