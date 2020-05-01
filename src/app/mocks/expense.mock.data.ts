import { Expense } from './../models/expense.model';

export const MOCK_EXPENSES: Expense[] = [
    {
        title: 'ShopRite groceries',
        date: '04/01/2020',
        time: '10:30 AM',
        category: 'Food',
        amount: 100.00,
        paymentType: 'Credit card',
        notes: ''
    },
    {
        title: 'White Horse Tavern',
        date: '04/03/2020',
        time: '5:30 PM',
        category: 'Fun',
        amount: 30.67,
        paymentType: 'Cash',
        notes: ''
    },
    {
        title: 'April Rent',
        date: '04/05/2020',
        time: '11:30 AM',
        category: 'Rent',
        amount: 1000.00,
        paymentType: 'Check',
        notes: ''
    },
    {
        title: 'Coned',
        date: '04/05/2020',
        time: '11:30 AM',
        category: 'Rent',
        amount: 64.33,
        paymentType: 'Credit card',
        notes: 'For February and March'
    },
    {
        title: 'Chipotle',
        date: '04/10/2020',
        time: '6:30 PM',
        category: 'Food',
        amount: 12.84,
        paymentType: 'Credit card',
        notes: ''
    },
    {
        title: 'Car payment - April',
        date: '04/11/2020',
        time: '10:30 AM',
        category: 'Car loan',
        amount: 400.00,
        paymentType: 'Checking Account',
        notes: 'Raised recurring payment amount to $400'
    }
];
