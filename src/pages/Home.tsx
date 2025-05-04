import { Box, Grid, Typography } from "@mui/material";
import { TransactionBox } from "../components/TransactionBox";
import { TransactionForm } from "../components/TransactionForm";
import { TransactionTable } from "../components/TransactionTable";
import { theme } from "../theme";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 2,
        height: "100dvh",
        background: `linear-gradient(to bottom, ${theme.palette.success.main} 30%, #F0F6F6 30%)`,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          width: "100%",
          marginTop: "2rem",
          textAlign: "center",
          color: "white",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        Money Mind
      </Typography>

      <Grid container columns={3} spacing={2} sx={{ width: "100%", mt: 6 }}>
        <Grid
          size={{
            xs: 3,
            md: 1,
            lg: 1,
            xl: 1,
          }}
        >
          <TransactionBox.Root>
            <TransactionBox.Income />
          </TransactionBox.Root>
        </Grid>
        <Grid
          size={{
            xs: 3,
            md: 1,
            lg: 1,
            xl: 1,
          }}
        >
          <TransactionBox.Root>
            <TransactionBox.Expense />
          </TransactionBox.Root>
        </Grid>
        <Grid
          size={{
            xs: 3,
            md: 1,
            lg: 1,
            xl: 1,
          }}
        >
          <TransactionBox.Root>
            <TransactionBox.Balance />
          </TransactionBox.Root>
        </Grid>
      </Grid>
      <TransactionForm />
      <TransactionTable />
    </Box>
  );
};
