import { AddExpenseModule } from './add-expense/add-expense.module';
import { CategoryDetailModule } from './category-detail/category-detail.module';
import { HomepageModule } from './homepage/homepage.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

const viewModules = [
    HomepageModule,
    CategoryDetailModule,
    AddExpenseModule
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ...viewModules
    ],
    exports: [
        ...viewModules
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ViewModule { }
