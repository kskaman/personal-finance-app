import { Stack, Typography } from "@mui/material";
import CaretLeftIcon from "../../Icons/CaretLeftIcon";
import CustomButton from "../../utilityComponents/CustomButton";
import CaretRightIcon from "../../Icons/CaretRightIcon";
import { SM_BREAK } from "../../data/widthConstants";

interface Props {
  numbers: number[];
  selectedPage: number;
  handlePageSelect: (newPageNum: number) => void;
  parentWidth: number;
}

const PageNav = ({
  numbers,
  selectedPage,
  handlePageSelect,
  parentWidth,
}: Props) => {
  const isMobile = parentWidth < SM_BREAK;
  const lastIndex = numbers.length - 1;

  let displayedNumbers: (number | "...")[] = [];

  if (isMobile) {
    if (lastIndex < 3) {
      displayedNumbers = numbers;
    } else if (selectedPage < 3) {
      displayedNumbers = [numbers[0], numbers[1], "...", numbers[lastIndex]];
    } else if (selectedPage < numbers[lastIndex - 1]) {
      displayedNumbers = [
        selectedPage - 1,
        selectedPage,
        "...",
        numbers[lastIndex],
      ];
    } else {
      displayedNumbers = [
        numbers[0],
        "...",
        numbers[lastIndex - 1],
        numbers[lastIndex],
      ];
    }
  } else {
    if (lastIndex < 5) {
      displayedNumbers = numbers;
    } else if (selectedPage < 3) {
      displayedNumbers = [
        numbers[0],
        numbers[1],
        numbers[2],
        "...",
        numbers[lastIndex],
      ];
    } else if (selectedPage < numbers[lastIndex - 2]) {
      displayedNumbers = [
        selectedPage - 1,
        selectedPage,
        selectedPage + 1,
        "...",
        numbers[lastIndex],
      ];
    } else {
      displayedNumbers = [
        numbers[0],
        "...",
        numbers[lastIndex - 2],
        numbers[lastIndex - 1],
        numbers[lastIndex],
      ];
    }
  }

  return (
    <Stack
      height="64px"
      minWidth="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <CustomButton
        color={"primary.dark"}
        borderColor={"primary.dark"}
        onClick={() => handlePageSelect(selectedPage - 1)}
        hoverColor={"text.primary"}
        hoverBgColor={"primary.dark"}
      >
        <CaretLeftIcon color="inherit" />
        <Typography color="inherit" display={{ xs: "none", sm: "block" }}>
          Prev
        </Typography>
      </CustomButton>

      <Stack direction="row" gap="8px">
        {displayedNumbers.map((num) =>
          typeof num === "number" ? (
            <CustomButton
              key={num}
              color={
                num === selectedPage ? "primary.contrastText" : "primary.main"
              }
              onClick={() => handlePageSelect(num)}
              borderColor={
                num === selectedPage ? "primary.main" : "primary.dark"
              }
              backgroundColor={
                num === selectedPage ? "primary.main" : "inherit"
              }
              hoverColor={"text.primary"}
              hoverBgColor={"primary.dark"}
            >
              <Typography>{num}</Typography>
            </CustomButton>
          ) : (
            <Typography
              key={num}
              padding="0 16px 6px"
              color={"primary.main"}
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              borderRadius="8px"
              border={`1px solid primary.dark`}
            >
              {num}
            </Typography>
          )
        )}
      </Stack>

      <CustomButton
        color={"primary.dark"}
        borderColor={"primary.dark"}
        onClick={() => handlePageSelect(selectedPage + 1)}
        hoverColor={"text.primary"}
        hoverBgColor={"primary.dark"}
      >
        <Typography color="inherit" display={{ xs: "none", sm: "block" }}>
          Next
        </Typography>
        <CaretRightIcon color="inherit" />
      </CustomButton>
    </Stack>
  );
};

export default PageNav;
