import AddIcon from "@mui/icons-material/Add";
import { Button, Paper, TextField } from "@mui/material";

export const TransactionForm = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        p: 2,
        width: "100%",
      }}
    >
      <TextField label="Valor" type="number" fullWidth />
      <TextField label="Descrição" fullWidth />
      <TextField
        label="Tipo"
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

      <Button
        sx={{
          bgcolor: "success.main",
          color: "white",
        }}
      >
        <AddIcon />
      </Button>
    </Paper>
  );
};
