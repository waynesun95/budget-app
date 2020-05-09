import { CurrencyPipe } from '@angular/common';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CategoryListItemComponent } from './category-list-item.component';

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    providers: [
        CurrencyPipe
    ],
    declarations: [
        CategoryListItemComponent
    ],
    exports: [
        CategoryListItemComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CategoryListItemModule { }
