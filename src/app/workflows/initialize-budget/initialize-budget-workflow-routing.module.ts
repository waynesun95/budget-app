import { OptionalCategoriesWorkflowComponent } from './optional-categories/optional-categories.component';
import { RequiredCatgoriesWorkflowComponent } from './required-categories/required-categories.component';
import { ConfirmBudgetWorkflowComponent } from './confirm-budget/confirm-budget.component';
import { SetBudgetWorkflowComponent } from './set-budget/set-budget.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    // {path: '', redirectTo: '/initialize-budget/set-budget', pathMatch: 'full'},
    {path: '', component: SetBudgetWorkflowComponent},
    // {path: '', component: RequiredCatgoriesWorkflowComponent},
    {path: 'confirm-budget', component: ConfirmBudgetWorkflowComponent },
    {path: 'required-categories', component: RequiredCatgoriesWorkflowComponent},
    {path: 'optional-categories', component: OptionalCategoriesWorkflowComponent},
    // {path: '', component: OptionalCategoriesWorkflowComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class InitializeBudgetWorkflowRoutingModule { }
