import { ReactElement } from "react";

export interface DatabaseContextType {
  handleGetDatabase: () => void;
  data: Array<any>;
}

export interface DatabaseProviderProps {
  children: ReactElement;
}
