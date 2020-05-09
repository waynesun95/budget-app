import { CategoryListItemModule } from './category-list-item/category-list-item.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CategoryListItemModule
    ],
    exports: [
        CategoryListItemModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ViewModule { }
