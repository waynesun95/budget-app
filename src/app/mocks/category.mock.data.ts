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
    },
    {
        name: 'Car Insurance',
        required: true,
        totalBudget: 200,
        remainingBudget: 200
    },
    {
        name: 'Clothing/Shoes',
        required: false,
        totalBudget: 100,
        remainingBudget: 100
    },
    {
        name: 'Haircut',
        required: false,
        totalBudget: 30,
        remainingBudget: 30
    },
    {
        name: 'Roth IRA',
        required: false,
        totalBudget: 600,
        remainingBudget: 600
    },
    {
        name: 'Brokerage',
        required: true,
        totalBudget: 200,
        remainingBudget: 200
    },
    {
        name: 'Random',
        required: false,
        totalBudget: 300,
        remainingBudget: 300
    }
];

// For testing sticky header
/*
{categoryType: 'A', categories: [
    {name: 'Test A1', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test A2', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test A3', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test A4', required: false, totalBudget: 300, remainingBudget: 300},
]},
{categoryType: 'B', categories: [
    {name: 'Test B1', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test B2', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test B3', required: false, totalBudget: 300, remainingBudget: 300},
]},
{categoryType: 'C', categories: []},
{categoryType: 'D', categories: []},
{categoryType: 'E', categories: [
    {name: 'Test E1', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test E2', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test E3', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test E4', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test E5', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test E6', required: false, totalBudget: 300, remainingBudget: 300},
    {name: 'Test E7', required: false, totalBudget: 300, remainingBudget: 300},
]}
*/
