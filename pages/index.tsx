import { FC, useEffect } from "react";
import { Home, Menu } from "../templates";
import { useFirebase } from "../hooks";
import * as S from "./styles";

const Index: FC = () => {
  const { data, handleGetDatabase } = useFirebase();

  useEffect(() => {
    handleGetDatabase();
  }, [handleGetDatabase]);

  const productsToArray: any[] = Object.values(data);

  return (
    <S.Page1>
      <S.Section>
        <Home />
      </S.Section>

      <S.Section>
        <Menu products={productsToArray} />
      </S.Section>
    </S.Page1>
  );
};
export default Index;
