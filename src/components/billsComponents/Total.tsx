import { Box, Stack, Typography } from "@mui/material";
import SubContainer from "../../utilityComponents/SubContainer";
import theme from "../../theme/theme";
import BillsIcon from "../../Icons/BillsIcon";
import { formatNumber } from "../../utils/utilityFunctions";
import { SM_BREAK } from "../../data/widthConstants";

interface TotalProps {
  parentWidth: number;
  totalBill: number;
}

const Total = ({ parentWidth, totalBill }: TotalProps) => {
  return (
    <SubContainer
      direction={parentWidth < SM_BREAK ? "row" : "column"}
      gap="32px"
      width="100%"
      padding={{ xs: "24px" }}
      bgColor={theme.palette.primary.main}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        width="40px"
        height="40px"
        marginY="auto"
      >
        <BillsIcon
          color={theme.palette.primary.main}
          height="27"
          width="32"
          strokeColor={theme.palette.text.primary}
        />
      </Stack>
      <Box>
        <Typography color={theme.palette.text.primary} fontSize="14px">
          Total Bills
        </Typography>
        <Typography
          color={theme.palette.text.primary}
          fontSize="32px"
          fontWeight="bold"
        >
          ${formatNumber(totalBill)}
        </Typography>
      </Box>
    </SubContainer>
  );
};

export default Total;
