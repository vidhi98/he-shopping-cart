import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import ListData from "../../data/ListData";
import CartDataContext from "./CartDataContext";

const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const setLSData = useCallback((data) => {
    localStorage.setItem("cartData", JSON.stringify(data));
  }, []);

  const getLSData = useMemo(() => {
    const data = JSON.parse(localStorage.getItem("cartData"));
    return data;
  }, []);

  useEffect(() => {
    setCartData(getLSData || ListData);
  }, [getLSData]);

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
      setLSData(newItems);
    },
    [cartData, setLSData]
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
      setLSData(newItems);
    },
    [cartData, setLSData]
  );

  const removeItem = useCallback(
    (itemId) => {
      const newData = cartData.filter((item) => item.id !== itemId);
      setCartData(newData);
      setLSData(newData);
    },
    [cartData, setLSData]
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

  const typeDiscountTotal = useMemo(() => {
    const result = cartData
      .filter((item) => item.type === "fiction")
      .reduce((a, b) => a + b.price * b.quantity * 0.15, 0);
    return result;
  }, [cartData]);

  const cartTotal = useMemo(
    () => itemsTotal - discountTotal - typeDiscountTotal,
    [discountTotal, itemsTotal, typeDiscountTotal]
  );

  const reloadData = useCallback(() => {
    setCartData(ListData);
    setLSData(ListData);
  }, [setLSData]);

  const data = {
    cartData,
    addQuantity,
    removeItem,
    removeQuantity,
    itemsCount,
    itemsTotal,
    discountTotal,
    cartTotal,
    reloadData,
    typeDiscountTotal,
  };

  return (
    <CartDataContext.Provider value={data}>{children}</CartDataContext.Provider>
  );
};

export default CartDataProvider;
