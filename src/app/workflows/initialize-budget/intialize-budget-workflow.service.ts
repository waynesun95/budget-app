import { Injectable } from "@angular/core";

@Injectable()
export class InitializeBudgetWorkflowService {
    private _budget: number = 0;
    set budget(value: number) {
        this._budget = value;
        console.log(value)
    }
    get budget(): number {
        return this._budget;
    }

    private _previousMonthNetRemainingBudget: number;
    set previousMonthNetRemainingBudget(value: number) {
        this._previousMonthNetRemainingBudget = value;
    }
    get previousMonthNetRemainingBudget(): number {
        return 300; // TODO: placeholder for testing
        // return this._previousMonthNetRemainingBudget;
    }
}
