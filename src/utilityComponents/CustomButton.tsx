import { Button } from "@mui/material";

interface Props {
  type?: "button" | "submit" | "reset";
  height?: string;
  width?: string;
  padding?: string;
  color: string;
  backgroundColor?: string;
  children: React.ReactNode;
  borderColor?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hoverColor: string;
  hoverBgColor: string;
  flex?: number;
}

const CustomButton = ({
  type = "button",
  flex,
  height = "40px",
  padding = "16px",
  backgroundColor = "inherit",
  color,
  width = "fit-content",
  children,
  borderColor,
  hoverColor,
  hoverBgColor,
  onClick,
}: Props) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      sx={{
        textTransform: "none",
        flex,
        height,
        padding,
        width,
        minWidth: "unset",
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: borderColor || backgroundColor,
        backgroundColor,
        color,
        cursor: "pointer",
        // handle hover styling via sx:
        "&:hover": {
          backgroundColor: hoverBgColor || backgroundColor,
          color: hoverColor || color,
          borderColor: hoverBgColor || borderColor || backgroundColor,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
