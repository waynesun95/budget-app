import { HomepageModule } from './homepage/homepage.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomepageModule
    ],
    // declarations: [
    //     HomepageComponent
    // ],
    // exports: [
    //     HomepageComponent
    // ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ViewModule { }
