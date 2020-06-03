import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular";
import { AddExpenseComponent } from "./add-expense.component";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        AddExpenseComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AddExpenseModule { }
