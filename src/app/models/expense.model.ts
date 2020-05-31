export interface Expense {
    title: string;
    date: string;
    time: string;
    category: string;       // TODO: figure out dynamic typing
    amount: number;
    paymentType: string;    // TODO: figure out dynamic typing
    notes: string;
}

export interface ExpenseListItem {
    date: string;
    expenses: Expense[];
    listHeight?: number;
}
