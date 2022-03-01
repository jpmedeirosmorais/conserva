import { FC, useEffect } from "react";
import { useFirebase } from "../hooks/useDatabase";

const Home: FC = () => {
  const { handleGetDatabase, data } = useFirebase();

  useEffect(() => {
    handleGetDatabase();
  }, [handleGetDatabase]);

  const dataLength = Object.keys(data).map(() => {});

  return (
    <>
      <h1> Página para teste de providers e integração com o Firebase</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {dataLength.length > 0 ? (
          Object.keys(data).map((key) => (
            <div key={data[key].id} className="card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
            </div>
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
export default Home;
