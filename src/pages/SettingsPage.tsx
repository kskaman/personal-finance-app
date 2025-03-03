import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import PageDiv from "../utilityComponents/PageDiv";
import CustomButton from "../utilityComponents/CustomButton";
import SetTitle from "../components/SetTitle";
import LogoutIcon from "../Icons/LogoutIcon";
import SubContainer from "../utilityComponents/SubContainer";
import { ReactNode, useContext } from "react";
import { CustomThemeContext } from "../context/CustomThemeContext";

const SettIngsRadioOption = ({
  selected,
  children,
}: {
  selected: boolean;
  children: ReactNode;
}) => {
  return (
    <Stack
      spacing={1}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bgcolor={selected ? "text.primary" : "background.default"}
      borderRadius="8px"
      padding={1}
    >
      {children}
    </Stack>
  );
};

const SettingsPage = () => {
  const { isDarkMode, toggleTheme } = useContext(CustomThemeContext);

  return (
    <>
      <SetTitle title="Settings" />
      <PageDiv>
        <Stack gap="32px">
          <Stack direction="row" gap="32px">
            <Typography
              width="100%"
              height="56px"
              fontSize="32px"
              fontWeight="bold"
              color={"primary.main"}
            >
              Settings
            </Typography>
            <CustomButton
              height="53px"
              padding="16px"
              backgroundColor={"primary.main"}
              color={"text.primary"}
              onClick={() => console.log("clicked logOut")}
              hoverColor={"text.primary"}
              hoverBgColor={"primary.light"}
            >
              <Stack direction="row" gap={1} alignItems="center">
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
                  <LogoutIcon color="inherit" />
                </Box>
                <Typography noWrap fontSize="14px" fontWeight="bold">
                  Log Out
                </Typography>
              </Stack>
            </CustomButton>
          </Stack>
          <Stack>
            {/* Theme Option */}
            <SubContainer>
              <Typography variant="h6" fontWeight="bold">
                Theme Options
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  value={isDarkMode ? "dark" : "light"}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "light" && isDarkMode) toggleTheme();
                    else if (value === "dark" && !isDarkMode) toggleTheme();
                  }}
                  row={false}
                  sx={{ gap: 2 }}
                >
                  <SettIngsRadioOption selected={isDarkMode}>
                    <Stack direction={"column"} gap={1}>
                      <Typography fontSize="16px" fontWeight="bold">
                        Light Mode
                      </Typography>
                      <Typography fontSize="14px" color="primary.light">
                        Opt for a neat and timeless light theme.
                      </Typography>
                    </Stack>
                    <FormControlLabel
                      value="light"
                      control={<Radio />}
                      label=""
                    />
                  </SettIngsRadioOption>
                  <SettIngsRadioOption selected={!isDarkMode}>
                    <Stack direction={"column"} gap={1}>
                      <Typography fontSize="16px" fontWeight="bold">
                        Dark Mode
                      </Typography>
                      <Typography fontSize={"14px"} color="primary.light">
                        Opt for refined and contemporary dark theme.
                      </Typography>
                    </Stack>
                    <FormControlLabel
                      value="dark"
                      control={<Radio />}
                      label=""
                    />
                  </SettIngsRadioOption>
                </RadioGroup>
              </FormControl>
            </SubContainer>
          </Stack>
        </Stack>
      </PageDiv>
    </>
  );
};

export default SettingsPage;
