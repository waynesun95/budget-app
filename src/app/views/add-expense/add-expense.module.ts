import { DataService } from './../../services/data.service';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { AddExpenseComponent } from "./add-expense.component";
import { DatePipe } from '@angular/common';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        AddExpenseComponent
    ],
    exports: [
        AddExpenseComponent
    ],
    providers: [
        DataService,
        DatePipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AddExpenseModule { }
