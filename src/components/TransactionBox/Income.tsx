import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Box, Typography } from "@mui/material";
import { useTransactionStore } from "../../store/TransactionStore";
import { theme } from "../../theme";

export const Income = () => {
  const { income } = useTransactionStore();

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
          Entrada
        </Typography>
        <ArrowUpwardRoundedIcon color="success" />
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: theme.palette.success.main }}
      >
        R${" "}
        {income.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Typography>
    </>
  );
};
