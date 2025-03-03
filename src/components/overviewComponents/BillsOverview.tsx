import { Link, Stack, Typography } from "@mui/material";
import CaretRightIcon from "../../Icons/CaretRightIcon";
import SubContainer from "../../utilityComponents/SubContainer";
import { useContext } from "react";
import { RecurringDataContext } from "../../context/RecurringContext";
import { formatNumber } from "../../utils/utilityFunctions";

const BillsOverview = () => {
  const { recurringSummary } = useContext(RecurringDataContext);

  const summaryData = {
    paid: { label: "Paid Bills", borderColor: "others.green" },
    unpaid: {
      label: "Total Upcoming",
      borderColor: "others.yellow",
    },
    dueSoon: { label: "Due Soon", borderColor: "others.cyan" },
    due: { label: "Due", borderColor: "others.red" },
  };
  const showDue = recurringSummary.due.count !== 0;

  return (
    <SubContainer>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontWeight="bold" fontSize="20px" color={"primary.main"}>
          Recurring Bills
        </Typography>
        <Link
          href="/bills"
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="12px"
          underline="none"
        >
          <Typography
            fontSize="14px"
            color={"primary.light"}
            sx={{
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            See Details
          </Typography>
          <CaretRightIcon color={"primary.light"} />
        </Link>
      </Stack>
      <Stack gap="12px">
        {Object.entries(recurringSummary)
          .filter(([key]) => key !== "due" || showDue)
          .map(([key, summary]) => {
            const typedKey = key as keyof typeof summaryData;

            const isDue = typedKey === "due";

            return (
              <Stack
                key={key}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                padding="20px 16px"
                borderRadius="8px"
                borderLeft="4px solid"
                borderColor={summaryData[typedKey].borderColor}
                bgcolor={"background.default"}
              >
                <Typography
                  fontSize="14px"
                  fontWeight={isDue ? "bold" : "normal"}
                  color={isDue ? "others.red" : "primary.light"}
                >
                  {summaryData[typedKey].label}
                </Typography>
                <Typography
                  fontSize="14px"
                  fontWeight="bold"
                  color={isDue ? "others.red" : "primary.main"}
                >
                  ${formatNumber(summary.total)}
                </Typography>
              </Stack>
            );
          })}
      </Stack>
    </SubContainer>
  );
};

export default BillsOverview;
