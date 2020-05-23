import { CurrencyPipe } from '@angular/common';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ExpenseListItemComponent } from './expense-list-item.component';

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        ExpenseListItemComponent
    ],
    exports: [
        ExpenseListItemComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ExpenseListItemModule { }
