import { RouterExtensions } from 'nativescript-angular/router';
import { InitializeBudgetWorkflowService } from './../intialize-budget-workflow.service';
import { DisposableIncomeFormField } from './../../../models/set-disposable-income.model';
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { DisposableIncome } from '~/app/models/set-disposable-income.model';
import { DataFormEventData, RadDataForm, EntityProperty } from 'nativescript-ui-dataform';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';
import { ActivatedRoute } from '@angular/router';

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
        private datePipe: DatePipe,
        private initializeBudgetWorkflowService: InitializeBudgetWorkflowService,
        private routerExtensions: RouterExtensions,
    ) {}

    ngOnInit(): void {
        console.log('init')
        this._disposableIncome = new DisposableIncome(0.00);
    }

    /**
     * Needed when navigating back from next page in workflow.
     * Without this form data bindings stop working for some reason
     * https://github.com/ProgressNS/nativescript-ui-feedback/issues/1350#issuecomment-591648524
     * @param event some RadDataForm loaded event
     */
    onDataFormLoaded(event) {
        const dataForm = event.object;
        if (dataForm._ios && dataForm._nativeDelegate && !dataForm._ios.delegate) {
            dataForm._ios.delegate = dataForm._nativeDelegate;
        }
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
            const budgetObj = JSON.parse(this.disposableIncomeForm.dataForm.editedObject);
            this.initializeBudgetWorkflowService.budget = +budgetObj.disposableIncome;
            this.routerExtensions.navigate(['initialize-budget/confirm-budget']);
        });
    }
}
