import { FC, useEffect } from "react";
import Link from "next/link";
import { Card } from "../../common/styles/hometests";
import { useFirebase } from "../../hooks";

const Dashboard: FC = () => {
  const { setActualProduct, handleGetDatabase, handleDeleteProduct, data } = useFirebase();

  const dataLength = Object.keys(data).map(() => {});

  useEffect(() => {
    handleGetDatabase();
  }, [handleGetDatabase]);

  return (
    <>
      <h1> Página para teste de providers e integração com o Firebase</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {dataLength.length > 0 ? (
          Object.keys(data).map((key) => (
            <Card key={data[key].id} className="card">
              <img
                src={data[key].image}
                alt={data[key].image}
                width={100}
                height={100}
              />
              <h1>{data[key].type}</h1>
              <h3>{data[key].flavor}</h3>
              <p>{data[key].description}</p>
              <h2>{data[key].price}</h2>

              <button
                onClick={() => {
                  const product = {
                    flavor: data[key].flavor,
                    id: data[key].id,
                    type: data[key].type,
                    description: data[key].description,
                    price: data[key].price,
                    imageUrl: data[key].imageUrl,
                  };
                  setActualProduct(product);
                }}
              >
                <Link href={`editar/`}>Atualizar</Link>
              </button>
              {data[key].flavor}
              -
              {data[key].id}
              <button onClick={() => handleDeleteProduct(data[key].flavor, data[key].id)}>Deletar</button>
            </Card>
          ))
        ) : (
          <div>
            <h1>...</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
