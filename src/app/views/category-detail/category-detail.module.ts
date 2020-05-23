import { ExpenseListItemModule } from './../../components/expense-list-item/expense-list-item.module';
import { CategoryDetailComponent } from './category-detail.component';
import { DataService } from './../../services/data.service';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        ExpenseListItemModule
    ],
    declarations: [
        CategoryDetailComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CategoryDetailModule { }
