import { useContext } from "react";
import CartDataContext from "./CartDataContext";

const useCartDataContext = () => {
  return useContext(CartDataContext);
};

export default useCartDataContext;
