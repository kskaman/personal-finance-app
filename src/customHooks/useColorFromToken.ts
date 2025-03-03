import { useTheme, Theme } from "@mui/material/styles";

// Define a union of allowed tokens.
type StandardPaletteTokens =
  | `primary.${"main" | "light" | "dark" | "contrastText"}`
  | `secondary.${"main" | "light" | "dark" | "contrastText"}`
  | `background.${"default" | "paper"}`
  | `text.${"primary" | "secondary"}`;

type OthersPaletteTokens =
  | `others.${"pink" | "turquoise" | "brown" | "magenta" | "blue" | "navyGrey" | "armyGreen" | "gold" | "orange" | "purple" | "navy" | "green" | "cyan" | "red" | "yellow"}`;

type PaletteToken = StandardPaletteTokens | OthersPaletteTokens;

export const useColorFromToken = (token: PaletteToken): string => {
  const theme = useTheme<Theme>();
  const [groupKey, variant] = token.split(".") as [keyof Theme["palette"], string];

  switch (groupKey) {
    case "primary":
    case "secondary": {
      // For primary and secondary, the type is known from MUI.
      const colorGroup = theme.palette[groupKey];
      // Since we know the allowed variants, we can check explicitly.
      if (
        variant === "main" ||
        variant === "light" ||
        variant === "dark" ||
        variant === "contrastText"
      ) {
        return colorGroup[variant];
      }
      break;
    }
    case "background": {
      // background is an object with default and paper.
      const bg = theme.palette.background;
      if (variant === "default") return bg.default;
      if (variant === "paper") return bg.paper;
      break;
    }
    case "text": {
      // text is an object with primary and secondary.
      const textColors = theme.palette.text;
      if (variant === "primary") return textColors.primary;
      if (variant === "secondary") return textColors.secondary;
      break;
    }
    case "others": {
      // 'others' is defined in your module augmentation.
      const others = theme.palette.others;
      // Using a type guard:
      if (
        variant === "pink" ||
        variant === "turquoise" ||
        variant === "brown" ||
        variant === "magenta" ||
        variant === "blue" ||
        variant === "navyGrey" ||
        variant === "armyGreen" ||
        variant === "gold" ||
        variant === "orange" ||
        variant === "purple" ||
        variant === "navy" ||
        variant === "green" ||
        variant === "cyan" ||
        variant === "red" ||
        variant === "yellow"
      ) {
        return others[variant];
      }
      break;
    }
    default:
      break;
  }
  throw new Error(`Token "${token}" is not a valid palette key.`);
};
