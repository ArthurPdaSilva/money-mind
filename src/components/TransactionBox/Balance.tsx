import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import { Box, Typography } from "@mui/material";
import { useTransactionStore } from "../../store/TransactionStore";

export const Balance = () => {
  const { balance } = useTransactionStore();

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
          Saldo
        </Typography>
        <AttachMoneyRoundedIcon color="success" />
      </Box>

      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color:
            balance > 0
              ? "success.main"
              : balance < 0
              ? "error.main"
              : "text.primary",
        }}
      >
        R${" "}
        {balance.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Typography>
    </>
  );
};
