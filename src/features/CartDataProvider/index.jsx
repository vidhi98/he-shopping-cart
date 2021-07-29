import React from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import ListData from "../../data/ListData";
import CartDataContext from "./CartDataContext";

const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useState(ListData);

  const addQuantity = useCallback(
    (itemId, quantity = 1) => {
      const newItems = [...cartData];
      newItems.forEach((item) => {
        if (item.id === itemId) {
          item.quantity += quantity;
        }
      });
      console.log(newItems);
      setCartData(newItems);
    },
    [cartData]
  );

  const removeQuantity = useCallback(
    (itemId, quantity = 1) => {
      let newItems = [...cartData];
      newItems.forEach((item) => {
        if (item.id === itemId) {
          if (item.quantity > 0) {
            item.quantity -= quantity;
          } else {
            newItems = newItems.filter((item) => item.id !== itemId);
          }
        }
      });
      setCartData(newItems);
    },
    [cartData]
  );

  const removeItem = useCallback(
    (itemId) => {
      const newData = cartData.filter((item) => item.id !== itemId);
      setCartData(newData);
    },
    [cartData]
  );
  const itemsCount = useMemo(() => cartData.length, [cartData]);

  const itemsTotal = useMemo(() => {
    const result = cartData.reduce((acc, curr) => {
      return parseFloat(acc) + parseFloat(curr.price) * parseInt(curr.quantity);
    }, 0);
    return result;
  }, [cartData]);

  const discountTotal = useMemo(() => {
    const result = cartData.reduce((acc, curr) => {
      return (
        parseFloat(acc) + parseFloat(curr.discount) * parseInt(curr.quantity)
      );
    }, 0);
    return result;
  }, [cartData]);

  const cartTotal = useMemo(
    () => itemsTotal - discountTotal,
    [discountTotal, itemsTotal]
  );

  const data = {
    cartData,
    addQuantity,
    removeItem,
    removeQuantity,
    itemsCount,
    itemsTotal,
    discountTotal,
    cartTotal,
  };

  return (
    <CartDataContext.Provider value={data}>{children}</CartDataContext.Provider>
  );
};

export default CartDataProvider;
