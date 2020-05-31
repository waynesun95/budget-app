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
    },
    { title: 'GRUBHUBNEWJINXIN 8775851085 NY',
    date: '02/11/2020',
    time: '02:40 AM',
    category: 'Food',
    amount: 12.21,
    paymentType: 'Credit Card',
    notes: '' },
  { title: 'AUTOPAY 191214094909878OAUTOPAY AUTO-PMT',
    date: '02/10/2020',
    time: '07:34 AM',
    category: 'Food',
    amount: 0,
    paymentType: 'Debit',
    notes: '' },
  { title: 'GRUBHUBSUBWAY 8775851085 NY',
    date: '02/10/2020',
    time: '05:08 PM',
    category: 'Food',
    amount: 18.41,
    paymentType: 'Credit Card',
    notes: 'Im another test note' },
  { title: 'MILLS TAVERN- NJ HOBOKEN NJ',
    date: '02/09/2020',
    time: '03:08 AM',
    category: 'Food',
    amount: 22,
    paymentType: 'Check',
    notes: '' },
  { title: 'KEY FOODS #0430 BROOKL BROOKLYN NY',
    date: '02/09/2020',
    time: '03:26 AM',
    category: 'Food',
    amount: 41.14,
    paymentType: 'Debit',
    notes: 'Im another test note' },
  { title: 'GRUBHUBNO1CHINESE 8775851085 NY',
    date: '02/03/2020',
    time: '05:42 PM',
    category: 'Food',
    amount: 26.67,
    paymentType: 'Cash',
    notes: '' },
  { title: 'SHOPRITE AVENUE I S1 BROOKLYN NY',
    date: '02/02/2020',
    time: '11:08 AM',
    category: 'Food',
    amount: 40.37,
    paymentType: 'Cash',
    notes: 'Im a test note' },
  { title: 'CMSVEND*CV AVENEL AVENEL NJ',
    date: '02/01/2020',
    time: '06:09 PM',
    category: 'Food',
    amount: 2,
    paymentType: 'Check',
    notes: '' },
  { title: 'LOTTO BEER DELI BROOKLYN NY',
    date: '02/01/2020',
    time: '11:26 AM',
    category: 'Food',
    amount: 5.2,
    paymentType: 'Credit Card',
    notes: 'Im another test note' },
  { title: 'PRET A MANGER 0100 NEW YORK NY',
    date: '02/01/2020',
    time: '04:47 AM',
    category: 'Food',
    amount: 12.72,
    paymentType: 'Check',
    notes: '' },
  { title: 'MSG CONCESSIONS NEW YORK NY',
    date: '02/01/2020',
    time: '03:16 PM',
    category: 'Food',
    amount: 34,
    paymentType: 'Debit',
    notes: 'Im a test note' },
  { title: 'ONLINE PAYMENT',
    date: '01/28/2020',
    time: '04:37 PM',
    category: 'Food',
    amount: NaN,
    paymentType: 'Check',
    notes: '' },
  { title: 'SP * KURZGESAGT STORE 8726661741 MT',
    date: '01/28/2020',
    time: '11:41 AM',
    category: 'Food',
    amount: 24.9,
    paymentType: 'Cash',
    notes: '' },
  { title: 'SPEAR PHYSICAL THERAPY NEW YORK NY',
    date: '01/28/2020',
    time: '04:41 PM',
    category: 'Food',
    amount: 120,
    paymentType: 'Cash',
    notes: '' },
  { title: 'CHIPOTLE 0867 BRIDGEWATER NJ',
    date: '01/25/2020',
    time: '05:42 PM',
    category: 'Food',
    amount: 9.28,
    paymentType: 'Cash',
    notes: '' },
  { title: 'WEGMAN\'S #96 BRIDGEWATER NJ',
    date: '01/25/2020',
    time: '03:35 PM',
    category: 'Food',
    amount: 41.9,
    paymentType: 'Cash',
    notes: '' },
  { title: 'WPY*American Foundatio 855-469-3729 NY',
    date: '01/24/2020',
    time: '07:57 AM',
    category: 'Food',
    amount: 52.9,
    paymentType: 'Credit Card',
    notes: 'Im a test note' },
  { title: 'Ulysses\' Folk House New York NY',
    date: '01/24/2020',
    time: '04:28 PM',
    category: 'Food',
    amount: 28,
    paymentType: 'Check',
    notes: '' },
  { title: 'Ulysses\' Folk House New York NY',
    date: '01/24/2020',
    time: '02:23 AM',
    category: 'Food',
    amount: 29,
    paymentType: 'Cash',
    notes: '' },
  { title: 'Ulysses\' Folk House New York NY',
    date: '01/24/2020',
    time: '01:31 AM',
    category: 'Food',
    amount: 32,
    paymentType: 'Credit Card',
    notes: '' },
  { title: 'Ulysses\' Folk House New York NY',
    date: '01/24/2020',
    time: '08:28 PM',
    category: 'Food',
    amount: 52,
    paymentType: 'Credit Card',
    notes: 'Im another test note' },
  { title: 'SPEAR PHYSICAL THERAPY NEW YORK NY',
    date: '01/23/2020',
    time: '08:30 AM',
    category: 'Food',
    amount: 120,
    paymentType: 'Credit Card',
    notes: 'Im a test note' },
  { title: 'GRUBHUBBURGERKING 8775851085 NY',
    date: '01/21/2020',
    time: '08:35 PM',
    category: 'Food',
    amount: 17.27,
    paymentType: 'Debit',
    notes: '' },
  { title: 'MTA*METROCARD MACHINE NEW YORK NY',
    date: '01/21/2020',
    time: '08:34 PM',
    category: 'Food',
    amount: 20,
    paymentType: 'Debit',
    notes: '' },
  { title: 'SPEAR PHYSICAL THERAPY NEW YORK NY',
    date: '01/21/2020',
    time: '05:43 PM',
    category: 'Food',
    amount: 120,
    paymentType: 'Credit Card',
    notes: '' },
  { title: 'GRUBHUBTHEORIGINALJOH 8775851085 NY',
    date: '01/20/2020',
    time: '01:13 PM',
    category: 'Food',
    amount: 1.63,
    paymentType: 'Debit',
    notes: 'Im another test note' },
  { title: 'SHOPRITE AVENUE I S1 BROOKLYN NY',
    date: '01/20/2020',
    time: '04:14 PM',
    category: 'Food',
    amount: 5.78,
    paymentType: 'Debit',
    notes: '' },
  { title: 'GRUBHUBTHEORIGINALJOH 8775851085 NY',
    date: '01/20/2020',
    time: '10:06 AM',
    category: 'Food',
    amount: 33.24,
    paymentType: 'Cash',
    notes: '' },
  { title: 'SHOPRITE AVENUE I S1 BROOKLYN NY',
    date: '01/20/2020',
    time: '10:05 AM',
    category: 'Food',
    amount: 66.79,
    paymentType: 'Credit Card',
    notes: '' },
  { title: 'ROUTE 66 AMERICAN BBQ NEW YORK NY',
    date: '01/18/2020',
    time: '08:24 AM',
    category: 'Food',
    amount: 38.66,
    paymentType: 'Credit Card',
    notes: '' },
  { title: 'SPEAR PHYSICAL THERAPY NEW YORK NY',
    date: '01/17/2020',
    time: '11:09 AM',
    category: 'Food',
    amount: 120,
    paymentType: 'Debit',
    notes: 'Im a test note' },
  { title: 'MTA*METROCARD MACHINE NEW YORK NY',
    date: '01/16/2020',
    time: '06:05 AM',
    category: 'Food',
    amount: 11,
    paymentType: 'Check',
    notes: '' },
  { title: 'GRUBHUBTHEORIGINALJOH 8775851085 NY',
    date: '01/16/2020',
    time: '03:12 PM',
    category: 'Food',
    amount: 24.85,
    paymentType: 'Cash',
    notes: 'Im a test note' },
  { title: 'ROUTE 66 AMERICAN BBQ NEW YORK NY',
    date: '01/15/2020',
    time: '02:50 PM',
    category: 'Food',
    amount: 17,
    paymentType: 'Cash',
    notes: '' },
  { title: 'ROUTE 66 AMERICAN BBQ NEW YORK NY',
    date: '01/15/2020',
    time: '10:04 PM',
    category: 'Food',
    amount: 55,
    paymentType: 'Debit',
    notes: 'Im a test note' },
  { title: 'KEY FOODS #0430 BROOKL BROOKLYN NY',
    date: '01/15/2020',
    time: '01:09 PM',
    category: 'Food',
    amount: 6.38,
    paymentType: 'Credit Card',
    notes: 'Im a test note' },
  { title: 'SPEAR PHYSICAL THERAPY NEW YORK NY',
    date: '01/14/2020',
    time: '09:00 AM',
    category: 'Food',
    amount: 120,
    paymentType: 'Cash',
    notes: 'Im a test note' },
  { title: 'WHITE HORSE TAVERN NEW YORK NY',
    date: '01/14/2020',
    time: '12:26 AM',
    category: 'Food',
    amount: 5.5,
    paymentType: 'Debit',
    notes: '' },
  { title: 'WHITE HORSE TAVERN NEW YORK NY',
    date: '01/14/2020',
    time: '04:54 AM',
    category: 'Food',
    amount: 7,
    paymentType: 'Debit',
    notes: '' },
  { title: 'TOUCHTUNES.HELPSHIFT. TOUCHTUNES.CO NY',
    date: '01/14/2020',
    time: '12:35 AM',
    category: 'Food',
    amount: 10,
    paymentType: 'Check',
    notes: 'Im another test note' },
  { title: 'WHITE HORSE TAVERN NEW YORK NY',
    date: '01/14/2020',
    time: '02:01 AM',
    category: 'Food',
    amount: 25,
    paymentType: 'Credit Card',
    notes: '' },
  { title: 'WHITE HORSE TAVERN NEW YORK NY',
    date: '01/14/2020',
    time: '10:15 AM',
    category: 'Food',
    amount: 25,
    paymentType: 'Credit Card',
    notes: 'Im a test note' }
];
