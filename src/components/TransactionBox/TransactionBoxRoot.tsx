import { Paper } from "@mui/material";

export const TransactionBoxRoot = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: 2,
        borderRadius: ".5rem",
      }}
    >
      {children}
    </Paper>
  );
};
