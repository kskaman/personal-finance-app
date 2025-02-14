import rawData from "../../data.json";
import { Balance, Budget, Pot, RecurringBill, Transaction } from "../types/Data";

const transactions: Transaction[] = rawData.transactions;
const balance: Balance = rawData.balance;
const pots: Pot[] = rawData.pots
const budgets: Budget[] = rawData.budgets
const recurringBills: RecurringBill[] = rawData.recurringBills

export function getInitialTransactions() {
    return [...transactions];
} 

export function getInitialBalance() {
    return { ...balance };
}

export function getInitialPots() {
    return [...pots];
} 

export function getInitialBudgets() {
    return [...budgets];
}

export function getInitialBills() {
    return [...recurringBills];
}