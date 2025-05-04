export type TransactionType = "income" | "expense";
export type Transaction = {
  id: string;
  type: TransactionType;
  description: string;
  amount: number;
  date: string;
};
