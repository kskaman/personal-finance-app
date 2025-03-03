import { Typography, Box, Stack } from "@mui/material";
import CustomButton from "@mui/material/Button";

import MinimizeIcon from "../Icons/MinimizeIcon";

interface MinimizeButtonProps {
  onClick: () => void;
  isMinimized: boolean;
}

const MinimizeButton = ({ onClick, isMinimized }: MinimizeButtonProps) => {
  return (
    <>
      <CustomButton
        onClick={onClick}
        disableElevation={true}
        disableTouchRipple={true}
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          padding: 0,
          margin: 0,
        }}
      >
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="flex-start"
          sx={{
            width: isMinimized ? "80px" : "276px",
            height: "56px",
            padding: "16px 32px",
            color: "background.paper",
            cursor: "pointer",
            textDecoration: "none",
            ":hover": {
              color: "secondary.contrastText",
            },
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              transform: isMinimized ? "rotate(180deg)" : "",
            }}
          >
            <MinimizeIcon color="inherit" />
          </Box>

          {!isMinimized && (
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                textAlign: "left",
                textTransform: "none",
              }}
            >
              Minimize Menu
            </Typography>
          )}
        </Stack>
      </CustomButton>
    </>
  );
};

export default MinimizeButton;
