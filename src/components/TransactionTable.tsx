import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import {
  type MRT_ColumnDef,
  MRT_ShowHideColumnsButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";
import type { Transaction } from "../@types";
import { useTransactionStore } from "../store/TransactionStore";
import { ExcelButton } from "./ExcelButton";

export const TransactionTable = () => {
  const { transactions, removeTransaction } = useTransactionStore();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const columns = useMemo<MRT_ColumnDef<Transaction>[]>(
    () => [
      {
        accessorKey: "amount",
        header: "Valor",
        Cell: ({ row }) => (
          <span>R$ {row.original.amount.toLocaleString("pt-BR")}</span>
        ),
      },
      {
        accessorKey: "description",
        header: "Descrição",
      },
      {
        accessorKey: "type",
        header: "Tipo",
        Cell: ({ row }) => {
          const type = row.original.type;
          return (
            <span
              style={{
                color: type === "income" ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {type === "income" ? "Entrada" : "Saída"}
            </span>
          );
        },
      },

      {
        accessorKey: "date",
        header: "Data",
      },
    ],
    [transactions]
  );

  const table = useMaterialReactTable({
    columns,
    data: transactions,
    enableEditing: true,
    enableRowActions: true,
    enableFilters: true,
    enableGlobalFilter: true,
    enableSorting: true,
    localization: {
      actions: "Ações",
      noRecordsToDisplay: "Nenhum registro encontrado",
    },
    muiTableBodyCellProps: {
      sx: {
        fontSize: "1rem",
      },
    },
    initialState: { showGlobalFilter: true },

    muiTableHeadCellProps: {
      sx: {
        fontSize: "1rem",
        fontWeight: "bold",
      },
    },
    renderRowActions({ row }) {
      return (
        <IconButton onClick={() => removeTransaction(row.original.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      );
    },
    renderToolbarInternalActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <MRT_ToggleGlobalFilterButton table={table} />
        <MRT_ToggleFiltersButton table={table} />
        <MRT_ShowHideColumnsButton table={table} />
        <ExcelButton />
      </Box>
    ),
  });

  return (
    <Box width="100%">
      <MaterialReactTable table={table} />
    </Box>
  );
};
