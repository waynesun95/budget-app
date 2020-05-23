import { ExpenseListItemModule } from './expense-list-item/expense-list-item.module';
import { CategoryListItemModule } from './category-list-item/category-list-item.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CategoryListItemModule,
        ExpenseListItemModule
    ],
    exports: [
        CategoryListItemModule,
        ExpenseListItemModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ComponentsModule { }
