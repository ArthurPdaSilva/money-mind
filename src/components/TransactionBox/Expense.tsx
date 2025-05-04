import ArrowDownwardRounded from "@mui/icons-material/ArrowDownwardRounded";
import { Box, Typography } from "@mui/material";
import { useTransactionStore } from "../../store/TransactionStore";
import { theme } from "../../theme";

export const Expense = () => {
  const { expense } = useTransactionStore();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Saída
        </Typography>
        <ArrowDownwardRounded color="error" />
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: theme.palette.error.main }}
      >
        R${" "}
        {expense.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Typography>
    </>
  );
};
