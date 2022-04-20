import { FC, useEffect } from "react";
import { Menu } from "../sections";
import * as S from "../common/styles/pages/produtos";
import { useFirebase } from "../hooks";

const texts = {
  header: "",
  content: {
    title: "",
    subtitle: "Compotas, geléias, pimentas e pizzas",
    details: "",
  },
};

const Produtos: FC = () => {
  const { data, handleGetDatabase } = useFirebase();

  useEffect(() => {
    handleGetDatabase();
  }, [handleGetDatabase]);

  const productsToArray: any[] = Object.values(data);
  return (
    <S.Content>
      <Menu products={productsToArray} texts={texts} />
    </S.Content>
  );
};

export default Produtos;
