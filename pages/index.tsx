import { FC, useCallback, useEffect, useState } from "react";
import { useDatabase } from "../hooks/useDatabase";

const Home: FC = () => {
  const { handleGetDatabase, data } = useDatabase();

  useEffect(() => {
    handleGetDatabase();
  }, [handleGetDatabase]);

  console.log(data);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.sabor}>
            <h1>{item.tipo}</h1>
            <h2>{item.sabor}</h2>
            <p>{item.descricao}</p>
            <h2>{item.preco}</h2>
          </div>
        ))
      ) : (
        <div>
          <h1>...</h1>
        </div>
      )}
      Página para teste de providers e integração com o Firebase
    </div>
  );
};
export default Home;
