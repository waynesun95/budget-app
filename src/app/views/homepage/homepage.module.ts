import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HomepageComponent } from "./homepage.component";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        HomepageComponent
    ],
    // exports: [
    //     HomepageComponent
    // ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomepageModule { }
