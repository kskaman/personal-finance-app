import { Typography, Box, Stack } from "@mui/material";
import { NavLink } from "react-router";

interface NavItemProps {
  Icon: React.FC<{ color: string }>;
  text: string;
  to: string;
  isMinimized: boolean;
}

const NavItem = ({ to, Icon, text, isMinimized }: NavItemProps) => {
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
        color: "background.paper",
        cursor: "pointer",
        textDecoration: "none",
        ":hover": {
          color: "secondary.contrastText",
        },
        // this should be at end else hover properties show up
        "&.active": {
          backgroundColor: "background.default",
          color: "primary.main",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
          borderLeft: `5px solid secondary.main`,
          ".iconClass": {
            color: "secondary.main",
          },
        },
      }}
    >
      <Box
        className="iconClass"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "24px",
          height: "24px",
        }}
      >
        <Icon color="inherit" />
      </Box>
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
