import { DisposableIncomeFormField } from './../../../models/set-disposable-income.model';
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from "@angular/core";
import { DisposableIncome } from '~/app/models/set-disposable-income.model';
import { DataFormEventData, RadDataForm, EntityProperty } from 'nativescript-ui-dataform';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';

declare var NSTextAlignment;

@Component({
    selector: "set-budget-workflow",
    templateUrl: "set-budget.component.html",
    styleUrls: ["set-budget.component.css"]
})
export class SetBudgetWorkflowComponent implements OnInit {

    @ViewChild('disposableIncomeForm', {static: false}) disposableIncomeForm: RadDataFormComponent;

    DisposableIncomeFormField = DisposableIncomeFormField;
    incomeInput = '$0';

    private _disposableIncome: DisposableIncome;
    get disposableIncome(): DisposableIncome {
        return this._disposableIncome;
    }

    get currentDateText(): string {
        const month = this.datePipe.transform(new Date(), 'MMMM');
        return `Set budget for ${month}`;
    }

    constructor(
        private datePipe: DatePipe
    ) {}

    ngOnInit(): void {
        this._disposableIncome = new DisposableIncome(0.00);
    }

    styleForm(args: DataFormEventData) {
        const dataForm = <RadDataForm>args.object;
        const entityProperty = <EntityProperty>dataForm.getPropertyByName(args.propertyName);

        switch (args.propertyName) {
            case DisposableIncomeFormField.DISPOSABLE_INCOME:
                args.editor.editor.textAlignment = NSTextAlignment.Center;
                break;
            default:
                break;
        }
    }

    onSubmit() {
        this.disposableIncomeForm.dataForm.validateAndCommitAll().then(res => {
            console.log(this.disposableIncomeForm.dataForm.editedObject);
        });
    }
}
