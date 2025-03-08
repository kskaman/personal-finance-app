import {
  Avatar,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import theme from "../../theme/theme";
import {
  formatDateToReadable,
  formatNumber,
  getInitials,
} from "../../utils/utilityFunctions";
import { Transaction } from "../../types/Data";
import ActionModal from "./ActionModal";
import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

const BudgetTransactionsModal = ({
  open,
  onClose,
  transactionsForCategory,
  categoryLabel,
}: {
  open: boolean;
  onClose: () => void;
  transactionsForCategory: Transaction[];
  categoryLabel: string;
}) => {
  const currencySymbol = useContext(SettingsContext).selectedCurrency;

  return (
    <ActionModal open={open} onClose={onClose} heading={categoryLabel}>
      <List>
        {transactionsForCategory.map((transaction, index) => {
          return (
            <div key={transaction.date}>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: "12px 0",
                  padding: 0,
                  height: "40px",
                  color: theme.palette.primary.light,
                }}
              >
                {/* Rounded Avatar with initials */}
                <Avatar
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: theme.palette.primary.contrastText,
                    backgroundColor: transaction.theme,
                    width: "40px",
                    height: "40px",
                    marginRight: "16px",
                  }}
                >
                  {getInitials(transaction.name)}
                </Avatar>
                <Typography fontSize="14px" fontWeight="bold">
                  {transaction.name}
                </Typography>
                <Stack
                  marginLeft="auto"
                  justifyContent="center"
                  alignItems="flex-end"
                >
                  {transaction.amount >= 0 ? (
                    <Typography
                      fontSize="14px"
                      fontWeight="bold"
                      color={theme.palette.secondary.main}
                    >
                      +{`${currencySymbol}${formatNumber(transaction.amount)}`}
                    </Typography>
                  ) : (
                    <Typography
                      fontSize="14px"
                      fontWeight="bold"
                      color={theme.palette.primary.main}
                    >
                      -{`${currencySymbol}${formatNumber(transaction.amount)}`}
                    </Typography>
                  )}
                  <Typography
                    fontSize="12px"
                    color={theme.palette.primary.light}
                  >
                    {formatDateToReadable(transaction.date)}
                  </Typography>
                </Stack>
              </ListItem>
              {index < transactionsForCategory.length - 1 && (
                <Divider
                  sx={{
                    width: "100%", // Ensure the divider spans across
                    color: theme.palette.primary.light,
                    marginTop: "8px",
                  }}
                />
              )}
            </div>
          );
        })}
      </List>
    </ActionModal>
  );
};

export default BudgetTransactionsModal;
