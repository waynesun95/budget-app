import { InitializeBudgetWorkflowRoutingModule } from './initialize-budget-workflow-routing.module';
import { SetBudgetWorkflowComponent } from './set-budget/set-budget.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

@NgModule({
    imports: [
        InitializeBudgetWorkflowRoutingModule
    ],
    declarations: [
        SetBudgetWorkflowComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InitializeBudgetWorkflowModule { }
