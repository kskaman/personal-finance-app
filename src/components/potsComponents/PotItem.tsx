import { Box, Stack, Typography } from "@mui/material";
import { Pot } from "../../types/Data";
import SubContainer from "../../utilityComponents/SubContainer";
import CustomButton from "../../utilityComponents/CustomButton";
import PotsProgressBar from "../../utilityComponents/PotsProgressBar";
import OptionsButton from "../modalComponents/OptionsButton";

interface Props {
  pot: Pot;
  setDeleteModalOpen: () => void;
  setEditModalOpen: () => void;
  setPotAddMoneyModalOpen: () => void;
  setPotWithdrawMoneyModalOpen: () => void;
}

const PotItem = ({
  pot,
  setDeleteModalOpen,
  setEditModalOpen,
  setPotAddMoneyModalOpen,
  setPotWithdrawMoneyModalOpen,
}: Props) => {
  return (
    <SubContainer gap="32px">
      <Stack direction="row" alignItems="center" gap="24px">
        <Box
          width="20px"
          height="20px"
          borderRadius="50%"
          bgcolor={pot.theme}
        ></Box>
        <Typography
          role="heading"
          fontSize="20px"
          fontWeight="bold"
          color={"primary.main"}
        >
          {pot.name}
        </Typography>
        <OptionsButton
          type="pot"
          onEdit={setEditModalOpen}
          onDelete={setDeleteModalOpen}
        />
      </Stack>

      <PotsProgressBar
        value={pot.total}
        target={pot.target}
        color={pot.theme}
        bgColor={"background.default"}
      />

      <Stack direction="row" gap="16px" height="53px">
        <CustomButton
          flex={1}
          height="100%"
          color={"primary.main"}
          backgroundColor={"background.default"}
          onClick={setPotAddMoneyModalOpen}
          hoverBgColor="inherit"
          hoverColor="inherit"
        >
          <Typography fontSize="14px" fontWeight="bold" noWrap>
            + Add Money
          </Typography>
        </CustomButton>
        <CustomButton
          flex={1}
          height="100%"
          color={"primary.main"}
          backgroundColor={"background.default"}
          onClick={setPotWithdrawMoneyModalOpen}
          hoverBgColor="inherit"
          hoverColor="inherit"
        >
          <Typography fontSize="14px" fontWeight="bold" noWrap>
            Withdraw
          </Typography>
        </CustomButton>
      </Stack>
    </SubContainer>
  );
};

export default PotItem;
