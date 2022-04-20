import { FC, useEffect } from "react";
import { Home, Menu, About } from "../sections";
import { useFirebase } from "../hooks";
import * as S from "../common/styles/pages/index";

const texts = {
  header: "ARTESANAL E COM AMOR",
  content: {
    title: "Produtos",
    subtitle: "Compotas, geléias e pimentas",
    details: "",
  },
};

const Index: FC = () => {
  const { data, handleGetDatabase } = useFirebase();

  useEffect(() => {
    handleGetDatabase();
  }, [handleGetDatabase]);

  const productsToArray: any[] = Object.values(data);

  const favorites = productsToArray.filter((product: any) => {
    return product.favorite;
  });

  return (
    <S.Page1>
      <S.Section>
        <Home />
      </S.Section>

      <S.Section>
        <S.MenuContainer>
          <Menu products={favorites} texts={texts} />
        </S.MenuContainer>
      </S.Section>

      <S.Section>
        <About />
      </S.Section>
    </S.Page1>
  );
};
export default Index;
