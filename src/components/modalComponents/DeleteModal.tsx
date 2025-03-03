import { Box, lighten, Stack, Typography } from "@mui/material";
import ActionModal from "./ActionModal";
import CustomButton from "../../utilityComponents/CustomButton";
import { capitalizeSentence } from "../../utils/utilityFunctions";
import { useColorFromToken } from "../../customHooks/useColorFromToken";

interface Props {
  open: boolean;
  onClose: () => void;
  handleDelete: () => void;
  label: string;
  type: string;
  warningText?: string;
}

const DeleteModal = ({
  open,
  onClose,
  handleDelete,
  warningText,
  label,
  type,
}: Props) => {
  const typedToken = capitalizeSentence(label);

  const onDelete = () => {
    handleDelete();
    onClose();
  };

  return (
    <ActionModal
      open={open}
      onClose={onClose}
      heading={`Delete '${typedToken}'`}
    >
      <Stack gap="32px">
        <Typography fontSize="14px" color={"primary.light"}>
          {warningText
            ? warningText
            : `Are you sure you want to delete this ${type}? This action cannot be
          reversed and all the data inside it will be removed forever.`}
        </Typography>

        <Box>
          <CustomButton
            width="100%"
            height="53px"
            backgroundColor={"others.red"}
            color={"text.primary"}
            onClick={() => {
              onDelete();
              onClose();
            }}
            hoverColor={"text.primary"}
            hoverBgColor={lighten(useColorFromToken("others.red"), 0.2)}
          >
            <Typography fontSize="14px" fontWeight="bold">
              Yes, Confirm Delete
            </Typography>
          </CustomButton>

          <CustomButton
            width="100%"
            height="53px"
            backgroundColor={"text.primary"}
            color={"primary.light"}
            onClick={onClose}
            hoverColor={"primary.light"}
            hoverBgColor={"text.primary"}
          >
            <Typography fontSize="14px" fontWeight="bold">
              No, Go Back
            </Typography>
          </CustomButton>
        </Box>
      </Stack>
    </ActionModal>
  );
};

export default DeleteModal;
