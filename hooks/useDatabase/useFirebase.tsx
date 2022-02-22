import { createContext, useCallback, useContext, useState } from "react";

import { getDatabase, ref, set, update, remove } from "firebase/database";
import { get, dbRef, child } from "../../services/firebase/firebase";

import {
  FirebaseContextType,
  FirebaseProviderProps,
  Product,
} from "./interfaces";

const FirebaseContext = createContext({} as FirebaseContextType);

const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const [data, setData] = useState([] as any);
  const [actualProduct, setActualProduct] = useState({} as Product);

  const handleGetDatabase = useCallback(() => {
    get(child(dbRef, `produtos/foods`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dataToSet = snapshot.val();
          setData(dataToSet);
        } else {
          alert("No data available");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function handleAddNewProduct(product: Product) {
    const db = getDatabase();
    set(ref(db, "produtos/foods/" + product.flavor + "-" + product.id), {
      flavor: product.flavor,
      description: product.description,
      image: product.imageUrl,
      price: product.price,
      type: product.type,
      id: product.id,
    }).then((res) => {
      console.log("Produto adicionado com sucesso!");
    }).catch((err) => {
      alert("Erro ao adicionar novo produto: " + err.message);
    });
  }

  function handleUpDateProduct(newProduct: Product, oldProduct: Product) {
    const db = getDatabase();

    update(ref(db, "produtos/foods/" + oldProduct.flavor + "-" + oldProduct.id ), {
      flavor: newProduct.flavor,
      description: newProduct.description,
      image: newProduct.imageUrl,
      price: newProduct.price,
      type: newProduct.type,
      id: newProduct.id,
    })
      .then(() => {
        alert("Produto atualizado com sucesso!");
      })
      .catch((err) => {
        alert("Erro ao atualizar produto: " + err.message);
      });
  }

  function handleDeleteProduct(handleKey) {
    const db = getDatabase();

    remove(ref(db, "produtos/foods/" + handleKey)).then(() => {
      alert("Deletado com sucesso!");
    }).catch((err) => {
      alert("Erro ao deletar produto: " + err.message);
    })
  }

  return (
    <FirebaseContext.Provider
      value={{ data, actualProduct, setActualProduct, handleGetDatabase, handleAddNewProduct, handleUpDateProduct,handleDeleteProduct }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

function useFirebase() {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
}

export { FirebaseProvider, useFirebase };
