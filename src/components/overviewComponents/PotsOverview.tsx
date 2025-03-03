import { Box, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useContext } from "react";
import PotIcon from "../../Icons/PotIcon";
import CaretRightIcon from "../../Icons/CaretRightIcon";
import { formatNumber } from "../../utils/utilityFunctions";
import SubContainer from "../../utilityComponents/SubContainer";
import { PotsDataContext } from "../../context/PotsContext";
import useParentWidth from "../../customHooks/useParentWidth";
import { SM_BREAK } from "../../data/widthConstants";

const PotsOverview = () => {
  const pots = useContext(PotsDataContext).pots;

  const totalSaved = pots.reduce((sum, pot) => sum + pot.total, 0);

  const fourPots = pots.slice(0, 4);

  const { containerRef, parentWidth } = useParentWidth();

  const isParentWidth = parentWidth < SM_BREAK;

  return (
    <Box ref={containerRef}>
      <SubContainer>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight="bold" fontSize="20px" color={"primary.main"}>
            Pots
          </Typography>
          <Link
            href="/pots"
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="12px"
            underline="none"
          >
            <Typography
              fontSize="14px"
              color={"primary.light"}
              sx={{
                ":hover": {
                  color: "primary.main",
                },
              }}
            >
              See Details
            </Typography>
            <CaretRightIcon color={"primary.light"} />
          </Link>
        </Stack>
        <Stack direction={isParentWidth ? "column" : "row"} gap="20px">
          <Stack
            flex={1}
            direction="row"
            padding="16px"
            alignItems="center"
            gap="16px"
            height="110px"
            bgcolor={"background.default"}
            borderRadius="12px"
          >
            <PotIcon color={"others.green"} />
            <Stack direction="column" justifyContent="space-between">
              <Typography fontSize="14px" color={"primary.light"}>
                Total Saved
              </Typography>
              <Typography fontSize="32px" color={"primary.main"}>
                ${formatNumber(totalSaved)}
              </Typography>
            </Stack>
          </Stack>
          <Grid
            container
            flex={1}
            rowSpacing="24px"
            columnSpacing="24px"
            columns={2}
          >
            {fourPots.map((pot, index) => (
              <Grid
                key={index}
                maxHeight={isParentWidth ? "100%" : "45%"}
                size={1}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {/* Colored Bar */}
                <Box
                  height="100%"
                  width="3px"
                  borderRadius="8px"
                  bgcolor={pot.theme}
                />

                {/* Pot Details */}
                <Stack direction="column">
                  <Typography fontSize="12px" color={"primary.light"}>
                    {pot.name}
                  </Typography>
                  <Typography
                    fontSize="14px"
                    fontWeight="bold"
                    color={"primary.main"}
                  >
                    ${formatNumber(pot.total)}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </SubContainer>
    </Box>
  );
};

export default PotsOverview;
