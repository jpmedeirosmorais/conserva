import { createContext, useCallback, useContext, useState } from "react";
import { get, dbRef, child } from "../../services/firebase/firebase";

import { FirebaseContextType, FirebaseProviderProps } from "./interfaces";

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
          console.log("No data");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        data,
        handleGetDatabase,
      }}
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
