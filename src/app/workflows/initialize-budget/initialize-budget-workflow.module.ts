import { OptionalCategoriesWorkflowComponent } from './optional-categories/optional-categories.component';
import { CategorySearchModule } from './../../components/category-search/category-search.module';
import { RequiredCatgoriesWorkflowComponent } from './required-categories/required-categories.component';
import { CurrencyPipe } from '@angular/common';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { InitializeBudgetWorkflowService } from './intialize-budget-workflow.service';
import { ConfirmBudgetWorkflowComponent } from './confirm-budget/confirm-budget.component';
import { InitializeBudgetWorkflowRoutingModule } from './initialize-budget-workflow-routing.module';
import { SetBudgetWorkflowComponent } from './set-budget/set-budget.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InitializeBudgetWorkflowRoutingModule,
        NativeScriptUIDataFormModule,
        CategorySearchModule
    ],
    declarations: [
        SetBudgetWorkflowComponent,
        ConfirmBudgetWorkflowComponent,
        RequiredCatgoriesWorkflowComponent,
        OptionalCategoriesWorkflowComponent
    ],
    providers: [
        InitializeBudgetWorkflowService,
        CurrencyPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InitializeBudgetWorkflowModule { }
