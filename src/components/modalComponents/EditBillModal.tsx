import { Controller, useForm } from "react-hook-form";
import ActionModal from "./ActionModal";
import { Box, lighten, Stack, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { formatDecimalNumber } from "../../utils/utilityFunctions";
import ModalTextField from "./ModalTextField";
import ModalSelectDropdown from "./ModalSelectDropdown";
import CustomButton from "../../utilityComponents/CustomButton";
import { dateOptions } from "../../data/dates";
import { useColorFromToken } from "../../customHooks/useColorFromToken";

// types and Interfaces
interface EditBillModalProps {
  open: boolean;
  onClose: () => void;
  billId: string;
  amount: number;
  dueDate: string;
  updateBill: (billId: string, amount: number, dueDate: string) => void;
}

interface FormValues {
  amount: string;
  dueDate: string;
}

// Yup Schema for Validation remains the same
const buildSchema = () =>
  yup.object({
    amount: yup
      .string()
      .required("Amount is required")
      .matches(/^\d+(\.\d{0,2})?$/, "Enter a valid number (up to 2 decimals).")
      .test(
        "positive",
        "Maximum spend must be a positive number",
        (value) => Number(value) > 0
      ),
    dueDate: yup.string().required("Due Date is required"),
  });

// Main Modal Component
const EditBillModal = ({
  open,
  onClose,
  billId,
  amount,
  dueDate,
  updateBill,
}: EditBillModalProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(buildSchema()),
    mode: "onChange",
    defaultValues: {
      amount: formatDecimalNumber(amount).toString(),
      dueDate: dueDate,
    },
  });

  const onSubmit = (data: FormValues) => {
    updateBill(
      billId,
      (amount = parseFloat(data.amount)),
      (dueDate = data.dueDate)
    );
    onClose();
  };

  return (
    <ActionModal open={open} onClose={onClose} heading={"Edit Recurring Bill"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="20px">
          <Typography fontSize="14px" color={"primary.light"}>
            Feel free to update your Due Date and Amount.
          </Typography>

          {/* Amount Field */}
          <Controller
            name="amount"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Box>
                <ModalTextField
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  error={error}
                  label="Amount"
                  placeholder="0.00"
                  adornmentText="$"
                />
              </Box>
            )}
          />

          {/* Due Date Selection Filed */}
          <Controller
            name="dueDate"
            control={control}
            render={({ field }) => (
              <Box>
                <ModalSelectDropdown
                  value={field.value}
                  onChange={field.onChange}
                  options={dateOptions}
                  label={"Due Date"}
                />
              </Box>
            )}
          />

          {/* SAVE BUTTON */}
          <CustomButton
            type="submit"
            width="100%"
            height="53px"
            backgroundColor={"primary.main"}
            onClick={() => {}}
            color={"text.primary"}
            hoverColor={"text.primary"}
            hoverBgColor={lighten(useColorFromToken("primary.main"), 0.2)}
          >
            <Typography fontSize="14px" fontWeight="bold">
              Save Changes
            </Typography>
          </CustomButton>
        </Stack>
      </form>
    </ActionModal>
  );
};

export default EditBillModal;
