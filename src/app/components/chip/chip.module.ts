import { ChipComponent } from './chip.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        ChipComponent
    ],
    exports: [
        ChipComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ChipModule { }
