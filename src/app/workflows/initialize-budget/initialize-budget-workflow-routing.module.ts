import { SetBudgetWorkflowComponent } from './set-budget/set-budget.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    // {path: '', redirectTo: '/set-budget', pathMatch: 'full'},
    {path: '', component: SetBudgetWorkflowComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class InitializeBudgetWorkflowRoutingModule { }
