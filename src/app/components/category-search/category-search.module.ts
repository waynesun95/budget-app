import { ChipModule } from './../chip/chip.module';
import { CategorySearchComponent } from './category-search.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from 'nativescript-angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        ChipModule
    ],
    declarations: [
        CategorySearchComponent
    ],
    exports: [
        CategorySearchComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CategorySearchModule { }
