import { AddExpenseComponent } from './views/add-expense/add-expense.component';
import { CategoryDetailComponent } from './views/category-detail/category-detail.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomepageComponent},
    {path: 'category-detail', component: CategoryDetailComponent},
    {path: 'add-expense', component: AddExpenseComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
