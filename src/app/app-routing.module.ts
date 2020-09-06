import { AddExpenseComponent } from './views/add-expense/add-expense.component';
import { CategoryDetailComponent } from './views/category-detail/category-detail.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {path: '', redirectTo: '/initialize-budget', pathMatch: 'full'},
    {path: 'home', component: HomepageComponent},
    {path: 'category-detail/:category', component: CategoryDetailComponent},
    {path: 'add-expense', component: AddExpenseComponent},
    {path: 'initialize-budget', loadChildren: () => import('./workflows/initialize-budget/initialize-budget-workflow.module').then(m => m.InitializeBudgetWorkflowModule)}
];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
