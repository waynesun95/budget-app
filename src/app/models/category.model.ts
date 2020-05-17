export interface Category {
    name: string;
    required: boolean;
    totalBudget: number;
    remainingBudget: number;
}

export interface CategoryListItem {
    categoryType: CategoryType;
    categories: Category[];
    listHeight?: number;
}

export enum CategoryType {
    REQUIRED = 'Required Expenses',
    OPTIONAL = 'Other Expenses'
}
