import { Category } from './../models/category.model';

export const MOCK_CATEGORIES: Category[] = [
    {
        name: 'Food',
        required: true,
        totalBudget: 500.00,
        remainingBudget: 387.16
    },
    {
        name: 'Fun',
        required: false,
        totalBudget: 600.00,
        remainingBudget: 469.33
    },
    {
        name: 'Rent',
        required: true,
        totalBudget: 1500.00,
        remainingBudget: 435.67
    },
    {
        name: 'Car Loan',
        required: true,
        totalBudget: 400.00,
        remainingBudget: 0.00
    }
];
