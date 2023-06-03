import { createSlice } from "@reduxjs/toolkit";

const EmptyState = {transactions: [], balance: []}



export const valueSlice = createSlice({
  name: "value",
  // Se usa el EmtyState declarado arriba, en caso de que no haya nada en
  // el localStorage
  initialState: localStorage.getItem("Transactions") ? 
  JSON.parse(localStorage.getItem("Transactions")) : 
  EmptyState,

  reducers: {

    onAddTransaction: (state, { payload }) => {
      state.transactions.push(payload);
    },

    onDeleteTRansaction: (state, { payload }) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== payload.id
      );
    },

    onAddBalance: (state, { payload }) => {
      state.balance = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetData,
  onAddTransaction,
  onDeleteTRansaction,
  onAddBalance,
} = valueSlice.actions;
