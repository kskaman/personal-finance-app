import { Typography, Stack } from "@mui/material";

import { formatNumber } from "../../utils/utilityFunctions";
import { useContext } from "react";
import { BalanceTransactionsDataContext } from "../../context/BalanceTransactionsContext";

const Balance = ({ isParentSm }: { isParentSm: boolean }) => {
  const balance = useContext(BalanceTransactionsDataContext).balance;

  return (
    <>
      <Stack
        width="100%"
        direction={isParentSm ? "column" : "row"}
        flexWrap="wrap"
        gap="24px"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Stack
          flex={1}
          width="100%"
          direction="column"
          gap="6px"
          padding="24px"
          borderRadius="12px"
          bgcolor={"primary.main"}
        >
          <Typography fontSize="12px" color={"text.primary"}>
            Current Balance
          </Typography>
          <Typography fontSize="32px" color={"text.primary"}>
            ${formatNumber(balance.current)}
          </Typography>
        </Stack>
        <Stack
          flex={1}
          width="100%"
          direction="column"
          gap="6px"
          padding="24px"
          borderRadius="12px"
          bgcolor={"text.primary"}
        >
          <Typography fontSize="12px" color={"primary.light"}>
            Income
          </Typography>
          <Typography fontSize="32px" color={"primary.main"}>
            ${formatNumber(balance.income)}
          </Typography>
        </Stack>
        <Stack
          flex={1}
          width="100%"
          direction="column"
          gap="6px"
          padding="24px"
          borderRadius="12px"
          bgcolor={"text.primary"}
        >
          <Typography fontSize="12px" color={"primary.light"}>
            Expenses
          </Typography>
          <Typography fontSize="32px" color={"primary.main"}>
            ${formatNumber(balance.expenses)}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Balance;
