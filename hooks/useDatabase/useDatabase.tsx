import { createContext, useCallback, useContext, useState } from "react";
import { get, dbRef, child } from "../../services/firebase/firebase";
import { DatabaseContextType, DatabaseProviderProps } from "./interfaces";

const DatabaseContext = createContext({} as DatabaseContextType);

const DatabaseProvider = ({ children }: DatabaseProviderProps) => {
  const [data, setData] = useState([] as any);

  const handleGetDatabase = useCallback(() => {
    get(child(dbRef, `produtos/foods`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          const dataToSet = snapshot.val();
          setData(dataToSet);
        } else {
          alert("No data available");
        }
      })
      .catch((error) => {
        alert("error");
      });
  }, []);

  return (
    <DatabaseContext.Provider value={{ data, handleGetDatabase }}>
      {children}
    </DatabaseContext.Provider>
  );
};

function useDatabase() {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
}

export { DatabaseProvider, useDatabase };
