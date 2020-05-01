import { DataService } from './../../services/data.service';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HomepageComponent } from "./homepage.component";
import { DatePipe, CurrencyPipe } from '@angular/common';

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        HomepageComponent
    ],
    providers: [
        CurrencyPipe,
        DatePipe,
        DataService
    ],
    // exports: [
    //     HomepageComponent
    // ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomepageModule { }
