import { FC, useEffect } from "react";
import { Home } from "../templates/Home";
import { useFirebase } from "../hooks";

const Index: FC = () => {
  const { data, handleGetDatabase } = useFirebase();

  useEffect(() => {
    handleGetDatabase();
  }, [ handleGetDatabase ]);

  const productsToArray: any[] = Object.values(data);

  return <Home products={productsToArray} />;
};
export default Index;
