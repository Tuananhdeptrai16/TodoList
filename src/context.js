import { createContext } from "react";

const store = {
  name: "Bobo",
};
const StoreContext = createContext(store);
export default StoreContext;
