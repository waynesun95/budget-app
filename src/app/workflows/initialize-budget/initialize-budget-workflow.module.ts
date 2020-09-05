import { InitializeBudgetWorkflowRoutingModule } from './initialize-budget-workflow-routing.module';
import { SetBudgetWorkflowComponent } from './set-budget/set-budget.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';

@NgModule({
    imports: [
        InitializeBudgetWorkflowRoutingModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        SetBudgetWorkflowComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InitializeBudgetWorkflowModule { }
