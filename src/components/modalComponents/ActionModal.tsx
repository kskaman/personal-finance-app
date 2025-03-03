import { Modal, Typography, Stack } from "@mui/material";
import CustomButton from "../../utilityComponents/CustomButton";
import CloseModalIcon from "../../Icons/CloseModalIcon";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  heading: string;
}

const ActionModal = ({ open, onClose, children, heading }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack
        gap="20px"
        maxHeight="90vh"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          overFlowY: "hidden",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "560px" },
          bgcolor: "text.primary",
          padding: { xs: "20px 24px", sm: "32px" },
          borderRadius: "12px",
          overflow: "auto",
          outline: "none",
          "&:focus": {
            outline: "none",
            border: "none",
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            overFlowY: "auto",
          }}
        >
          <Typography fontSize="20px" fontWeight="bold">
            {heading}
          </Typography>

          <CustomButton
            color={"inherit"}
            onClick={onClose}
            hoverColor={"none"}
            hoverBgColor={"none"}
            borderColor={"text.primary"}
          >
            <CloseModalIcon />
          </CustomButton>
        </Stack>
        {children}
      </Stack>
    </Modal>
  );
};

export default ActionModal;
