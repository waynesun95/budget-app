import { Observable } from "tns-core-modules/ui/page/page";

export class NewExpenseModel extends Observable {

    constructor() {
        super();
    }

    set newExpense(value: NewExpense) {
        this.set("_newExpense", value);
    }

    get newExpense(): NewExpense {
        return this.get("_newExpense");
    }
}

// tslint:disable-next-line: max-classes-per-file
export class NewExpense {
    title: string;
    // TODO: check if date and time should be 1) a single dateTime variable and 2) Date type or string type
    date: string;
    time: string;
    amount: string;
    paymentType: string;        // TODO: dynamically enum this somehow??
    category: string;           // TODO: dynamically enum this somehow??
    notes: string;

    constructor(title, date, time, amount, paymentType, category, notes) {
        this.title = title;
        this.date = date;
        this.time = time;
        this.amount = amount;
        this.paymentType = paymentType;
        this.category = category;
        this.notes = notes;
    }
}

export enum NewExpenseFormField {
    TITLE = 'title',
    DATE = 'date',
    TIME = 'time',
    AMOUNT = 'amount',
    PAYMENT_TYPE = 'paymentType',
    CATEGORY = 'category',
    NOTES = 'notes'
}
