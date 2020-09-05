import { Observable } from "tns-core-modules/ui/page/page";

export class SetDisposableIncomeModel extends Observable {

    constructor() {
        super();
    }

    set disposableIncome(value: DisposableIncome) {
        this.set("_disposableIncome", value);
    }

    get disposableIncome(): DisposableIncome {
        return this.get("_disposableIncome");
    }
}

// tslint:disable-next-line: max-classes-per-file
export class DisposableIncome {
    disposableIncome: number;

    constructor(income: number) {
        this.disposableIncome = income;
    }
}

export enum DisposableIncomeFormField {
    DISPOSABLE_INCOME = 'disposableIncome'
}
