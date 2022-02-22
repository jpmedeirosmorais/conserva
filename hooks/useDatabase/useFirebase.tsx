import { createContext, useCallback, useContext, useState } from "react";

import { getDatabase, ref, set } from "firebase/database";
import { get, dbRef, child } from "../../services/firebase/firebase";

import { FirebaseContextType, FirebaseProviderProps, Product } from "./interfaces";

const FirebaseContext = createContext({} as FirebaseContextType);

const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  const [data, setData] = useState([] as any);

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
    }).then(res => {
      console.log("Added successfully");
    });
  }

  return (
    <FirebaseContext.Provider value={{ data, handleGetDatabase, handleAddNewProduct }}>
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
