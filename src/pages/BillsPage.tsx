import { Box, Stack, Typography } from "@mui/material";
import SetTitle from "../components/SetTitle";
import theme from "../theme/theme";
import PageDiv from "../utilityComponents/PageDiv";
import { useContext, useState } from "react";
import { RecurringDataContext } from "../context/RecurringContext";
import Total from "../components/billsComponents/Total";
import Summary from "../components/billsComponents/Summary";
import BillsTable from "../components/billsComponents/BillsTable";
import SubContainer from "../utilityComponents/SubContainer";
import Filter from "../utilityComponents/Filter";
import { RecurringBill } from "../types/Data";
import useParentWidth from "../customHooks/useParentWidth";
import { SM_BREAK, XL_BREAK } from "../data/widthConstants";

// Function to filter & sort bills
const filterAndSortBills = (
  bills: RecurringBill[],
  searchName: string,
  sortBy: string
): RecurringBill[] => {
  const filteredBills = bills.filter((bill) =>
    searchName
      ? bill.name.toLowerCase().includes(searchName.toLowerCase().trim())
      : true
  );

  return filteredBills.sort((a, b) => {
    switch (sortBy) {
      case "Latest":
        return Number(a.dueDate) - Number(b.dueDate);
      case "Oldest":
        return Number(b.dueDate) - Number(a.dueDate);
      case "A to Z":
        return a.name.localeCompare(b.name);
      case "Z to A":
        return b.name.localeCompare(a.name);
      case "Highest":
        return a.amount - b.amount;
      case "Lowest":
        return b.amount - a.amount;
      default:
        return 0;
    }
  });
};

const BillsPage = () => {
  const { containerRef, parentWidth } = useParentWidth();

  const { recurringBills } = useContext(RecurringDataContext);

  const [searchName, setSearchName] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Latest");

  const totalBill = Math.abs(
    recurringBills.reduce((sum, bill) => sum + bill.amount, 0)
  );
  const filteredBills = filterAndSortBills(recurringBills, searchName, sortBy);

  return (
    <>
      <SetTitle title="Recurring Bills" />
      <Box ref={containerRef}>
        <PageDiv>
          <Stack direction="column" gap="32px">
            <Typography
              width="100%"
              height="56px"
              fontSize="32px"
              fontWeight="bold"
              color={theme.palette.primary.main}
            >
              Recurring Bills
            </Typography>
            <Stack
              direction={parentWidth < XL_BREAK ? "column" : "row"}
              gap="24px"
            >
              <Stack
                flex={1}
                gap="24px"
                width="100%"
                minWidth="200px"
                direction={
                  parentWidth > XL_BREAK
                    ? "column"
                    : parentWidth > SM_BREAK
                    ? "row"
                    : "column"
                }
              >
                <Total parentWidth={parentWidth} totalBill={totalBill} />
                <Summary />
              </Stack>
              <SubContainer flex={2}>
                <Stack gap="24px">
                  <Filter
                    parentWidth={parentWidth}
                    searchName={searchName}
                    setSearchName={setSearchName}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                  />
                  <BillsTable parentWidth={parentWidth} bills={filteredBills} />
                </Stack>
              </SubContainer>
            </Stack>
          </Stack>
        </PageDiv>
      </Box>
    </>
  );
};

export default BillsPage;
