import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onAddBalance,
  onAddTransaction,
  onDeleteTRansaction,
  onSetData,
} from "../store/Values/valuesSlice";

const useValueStore = () => {
  const { transactions } = useSelector((state) => state.value);
  const { value } = useSelector((state) => state);

  useEffect(() => {
    localStorage.setItem(
      "Transactions",
      JSON.stringify(value)
    );
  }, [value])
  


  const dispatch = useDispatch();


  const addTransaction = (description, amount, id) => {
    dispatch(onAddTransaction({ description, amount: +amount, id }));
  };

  const deleteTransaction = (id) => {
    dispatch(onDeleteTRansaction({ id }));
    localStorage.removeItem("Transactions", JSON.stringify({ id }));
  };

  const doBalance = () => {
    const numbers = transactions.map((transaction) => transaction.amount);
    const total = numbers.reduce((acc, item) => (acc += item), 0);
    dispatch(onAddBalance({ total }));
  };

  return {
    addTransaction,
    deleteTransaction,
    doBalance,
  };
};

export default useValueStore;
