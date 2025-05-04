import { create } from "zustand";

type transactionType = "income" | "expense";

interface TransactionState {
  income: number;
  expense: number;
  balance: number;
  updateTransaction: (type: transactionType, value: number) => void;
}

export const useTransactionStore = create<TransactionState>()((set) => ({
  income: 20.2,
  expense: 40.5,
  balance: 434.5,
  updateTransaction: (type, value) => {
    set((state) => {
      if (type === "income") {
        return { income: state.income + value, balance: state.balance + value };
      }
      return { expense: state.expense + value, balance: state.balance - value };
    });
  },
}));
