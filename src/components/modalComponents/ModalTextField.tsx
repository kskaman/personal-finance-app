import { TextField, InputAdornment, Typography, Box } from "@mui/material";
import theme from "../../theme/theme";
import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

interface CustomTextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: { message?: string };
  label: string;
  placeholder?: string;
  adornmentTextFlag?: boolean;
  maxLength?: number;
  isDisabled?: boolean;
}

const ModalTextField = ({
  value,
  onChange,
  onBlur,
  error,
  label,
  maxLength,
  placeholder = "",
  adornmentTextFlag = true,
  isDisabled = false,
}: CustomTextFieldProps) => {
  const currencySymbol = useContext(SettingsContext).selectedCurrency;

  return (
    <Box>
      <Typography
        fontSize="12px"
        color={theme.palette.primary.light}
        fontWeight="bold"
        sx={{ marginBottom: "2px" }}
      >
        {label}
      </Typography>
      <TextField
        disabled={isDisabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type="text"
        variant="outlined"
        placeholder={placeholder}
        error={!!error}
        helperText={error ? error.message : ""}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            height: "45px",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "8px",
          },
          width: "100%",
        }}
        slotProps={{
          input: {
            autoComplete: "off",
            ...(adornmentTextFlag && {
              startAdornment: (
                <InputAdornment position="start">
                  <Typography
                    color={theme.palette.primary.light}
                    fontSize="14px"
                  >
                    {currencySymbol}
                  </Typography>
                </InputAdornment>
              ),
            }),
          },
          ...(maxLength ? { maxLength } : {}),
        }}
      />
    </Box>
  );
};

export default ModalTextField;
