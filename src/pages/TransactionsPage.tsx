import { Box, Stack, Typography } from "@mui/material";
import SetTitle from "../components/SetTitle";
import theme from "../theme/theme";
import PageDiv from "../utilityComponents/PageDiv";
import SubContainer from "../utilityComponents/SubContainer";
import Filter from "../utilityComponents/Filter";
import TransactionsTable from "../components/transactionsComponents/TransactionsTable";
import PageNav from "../components/transactionsComponents/PageNav";
import { useContext, useState } from "react";
import { BalanceTransactionsDataContext } from "../context/BalanceTransactionsContext";
import { Transaction } from "../types/Data";
import useParentWidth from "../customHooks/useParentWidth";
import Button from "../utilityComponents/Button";

const filterAndSortTransactions = (
  transactions: Transaction[],
  searchName: string,
  category: string,
  sortBy: string
): Transaction[] => {
  const filteredTx = transactions.filter((txn) => {
    const matchesSearch = searchName
      ? txn.name.toLowerCase().includes(searchName.toLowerCase().trim())
      : true;

    const matchesCategory =
      category === "All Transactions" || txn.category === category;

    return matchesSearch && matchesCategory;
  });

  // Sorting Logic
  return filteredTx.sort((a, b) => {
    switch (sortBy) {
      case "Latest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "Oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
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

const TransactionsPage = () => {
  const { containerRef, parentWidth } = useParentWidth();

  const [pageNum, setPageNum] = useState<number>(() => 1);

  const transactions = useContext(BalanceTransactionsDataContext).transactions;
  const numPages = Math.ceil(transactions.length / 10);

  const numbers = Array.from({ length: numPages }, (_, i) => i + 1);

  const handlePageChange = (newPageNum: number) => {
    if (newPageNum >= 1 && newPageNum <= numbers[numbers.length - 1]) {
      setPageNum(newPageNum);
    }
  };

  const [searchName, setSearchName] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("Latest");
  const [category, setCategory] = useState<string>("All Transactions");

  const filteredTx: Transaction[] = filterAndSortTransactions(
    transactions,
    searchName,
    category,
    sortBy
  );

  const i = pageNum * 10;
  const selectedTx = filteredTx.slice(i - 10, i);

  return (
    <>
      <SetTitle title="Transactions" />
      <Box ref={containerRef}>
        <PageDiv>
          <Stack direction="column" gap="32px">
            <Stack direction="row" justifyContent="space-between">
              <Typography
                width="100%"
                height="56px"
                fontSize="32px"
                fontWeight="bold"
                color={theme.palette.primary.main}
              >
                Transactions
              </Typography>
              <Button
                height="53px"
                padding="16px"
                backgroundColor={theme.palette.primary.main}
                color={theme.palette.text.primary}
                onClick={() => console.log("clicked Add New Transaction")}
                hoverColor={theme.palette.text.primary}
                hoverBgColor={theme.palette.primary.light}
              >
                <Typography noWrap fontSize="14px" fontWeight="bold">
                  + Add New Transaction
                </Typography>
              </Button>
            </Stack>
            <SubContainer>
              <Filter
                parentWidth={parentWidth}
                searchName={searchName}
                setSearchName={setSearchName}
                category={category}
                setCategory={setCategory}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />

              <TransactionsTable txns={selectedTx} parentWidth={parentWidth} />

              <PageNav
                numbers={numbers}
                selectedPage={pageNum}
                handlePageSelect={handlePageChange}
                parentWidth={parentWidth}
              />
            </SubContainer>
          </Stack>
        </PageDiv>
      </Box>
    </>
  );
};

export default TransactionsPage;
