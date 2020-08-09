import { DataService } from './../../services/data.service';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HomepageComponent } from "./homepage.component";
import { DatePipe, CurrencyPipe } from '@angular/common';
import { CategoryListItemModule } from '~/app/components/category-list-item/category-list-item.module';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CategoryListItemModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        HomepageComponent
    ],
    exports: [
        HomepageComponent
    ],
    providers: [
        CurrencyPipe,
        DatePipe,
        DataService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomepageModule { }
