import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Transaction } from "../@types";

interface TransactionState {
  income: number;
  expense: number;
  balance: number;
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  removeTransaction: (id: string) => void;
}

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set) => ({
      income: 0,
      expense: 0,
      balance: 0,
      transactions: [],
      addTransaction: (transaction) => {
        set((state) => {
          const { type, amount } = transaction;
          const newTransactions = [...state.transactions, transaction];
          if (type === "income") {
            return {
              transactions: newTransactions,
              income: state.income + amount,
              balance: state.balance + amount,
              expense: state.expense,
            };
          }
          if (type === "expense") {
            return {
              transactions: newTransactions,
              expense: state.expense + amount,
              balance: state.balance - amount,
              income: state.income,
            };
          }
          return state;
        });
      },
      removeTransaction: (id) => {
        set((state) => {
          const transactionToRemove = state.transactions.find(
            (transaction) => transaction.id === id
          );
          if (!transactionToRemove) return state;

          const { type, amount } = transactionToRemove;
          if (type === "income") {
            return {
              transactions: state.transactions.filter(
                (transaction) => transaction.id !== id
              ),
              income: state.income - amount,
              balance: state.balance - amount,
              expense: state.expense,
            };
          }
          if (type === "expense") {
            return {
              transactions: state.transactions.filter(
                (transaction) => transaction.id !== id
              ),
              expense: state.expense - amount,
              balance: state.balance + amount,
              income: state.income,
            };
          }

          return state;
        });
      },
    }),
    {
      name: "transactions-storage",
    }
  )
);
