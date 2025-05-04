import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { IconButton, Tooltip } from "@mui/material";
import { download, generateCsv, mkConfig } from "export-to-csv";
import { useTransactionStore } from "../store/TransactionStore";

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
  filename: "transactions",
});

export const ExcelButton = () => {
  const { transactions } = useTransactionStore();

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(transactions);
    download(csvConfig)(csv);
  };

  return (
    <Tooltip title="Exportar para Excel">
      <IconButton onClick={handleExportData}>
        <FileDownloadIcon />
      </IconButton>
    </Tooltip>
  );
};
