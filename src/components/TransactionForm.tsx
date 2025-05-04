import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import type { Transaction, TransactionType } from "../@types";
import { useTransactionStore } from "../store/TransactionStore";

export const TransactionForm = () => {
  const { addTransaction } = useTransactionStore();
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const type = formData.get("type") as TransactionType;

    if (type === "income" && amount < 0) {
      alert("Valor de entrada não pode ser negativo.");
      return;
    }

    const description = formData.get("description") as string;
    const date = new Date().toLocaleString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const id = crypto.randomUUID();
    const transaction: Transaction = {
      id,
      type,
      description,
      amount,
      date,
    };

    addTransaction(transaction);
    setAmount(0);
    event.currentTarget.reset();
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        width: "100%",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid container columns={4} spacing={2} sx={{ width: "100%" }}>
        <Grid
          size={{
            xs: 4,
            md: 1,
            lg: 1,
            xl: 1,
          }}
        >
          <NumericFormat
            name="amount"
            label="Valor"
            required
            fullWidth
            size="small"
            customInput={TextField}
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            allowNegative={false}
            prefix="R$ "
            value={amount}
            onValueChange={(values) => {
              const { floatValue } = values;
              setAmount(floatValue || 0);
            }}
          />
        </Grid>
        <Grid
          size={{
            xs: 4,
            md: 1,
            lg: 1,
            xl: 1,
          }}
        >
          <TextField
            name="description"
            label="Descrição"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid
          size={{
            xs: 4,
            md: 1,
            lg: 1,
            xl: 1,
          }}
        >
          <TextField
            name="type"
            label="Tipo"
            size="small"
            select
            fullWidth
            slotProps={{
              select: {
                native: true,
              },
            }}
          >
            <option value="income">Entrada</option>
            <option value="expense">Saída</option>
          </TextField>
        </Grid>
        <Grid
          size={{
            xs: 4,
            md: 1,
            lg: 1,
            xl: 1,
          }}
        >
          <Button
            type="submit"
            sx={{
              bgcolor: "success.main",
              color: "white",
              width: "100%",
              height: "100%",
              "&:hover": {
                bgcolor: "success.dark",
              },
            }}
          >
            <AddIcon fontSize="medium" />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
