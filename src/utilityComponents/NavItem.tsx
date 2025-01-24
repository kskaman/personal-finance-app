import { Typography, Box, Stack } from "@mui/material";
import { NavLink } from "react-router";

import theme from "../theme/theme";

interface NavItemProps {
  icon: React.FC<{ color: string }>;
  text: string;
  to: string;
  isMinimized: boolean;
}

const NavItem = ({ to, icon, text, isMinimized }: NavItemProps) => {
  return (
    <Stack
      component={NavLink}
      to={to}
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{
        width: isMinimized ? "80px" : "276px",
        height: "56px",
        padding: "16px 32px",
        color: theme.palette.background.paper,
        cursor: "pointer",
        textDecoration: "none",
        ":hover": {
          color: theme.palette.secondary.contrastText,
        },
        // this should be at end else hover properties show up
        "&.active": {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.primary.main,
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
        },
      }}
    >
      <Box
        component={icon}
        sx={{
          width: "24px",
          height: "24px",
        }}
      />
      {!isMinimized && (
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          {text}
        </Typography>
      )}
    </Stack>
  );
};

export default NavItem;
