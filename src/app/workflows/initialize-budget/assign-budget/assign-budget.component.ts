import { DatePipe } from '@angular/common';
import { InitializeBudgetWorkflowService } from './../intialize-budget-workflow.service';
import { Component, ViewChild } from "@angular/core";
import { Category } from '~/app/models/category.model';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';

interface AssignBudgetDataFormInitializationObject {
    sourceObject: any;
    categoryNames: string[]
}

@Component({
    selector: "assign-budget-workflow",
    templateUrl: "assign-budget.component.html",
    styleUrls: ["assign-budget.component.css"]
})
export class AssignBudgetWorkflowComponent {

    @ViewChild('requiredCategoriesForm', {static: false}) requiredCategoriesForm: RadDataFormComponent;
    @ViewChild('optionalCategoriesForm', {static: false}) optionalCategoriesForm: RadDataFormComponent;

    requiredCategories = {};
    optionalCategories = {};
    requiredCategoryNames: string[] = [];
    optionalCategoryNames: string[] = [];

    get header() {
        return `Allocate ${this.datePipe.transform(new Date(), 'MMMM')}'s budget`;
    }

    constructor(
        private initializeBudgetWorkflowService: InitializeBudgetWorkflowService,
        private datePipe: DatePipe
    ) {
        const requiredCategoriesDataFormInitObj =
            this.initializeDataFormSource(this.initializeBudgetWorkflowService.requiredCategories);
        this.requiredCategories = requiredCategoriesDataFormInitObj.sourceObject;
        this.requiredCategoryNames = requiredCategoriesDataFormInitObj.categoryNames;

        const optionalCategoriesDataFormInitObj =
            this.initializeDataFormSource(this.initializeBudgetWorkflowService.optionalCategories);
        this.optionalCategories = optionalCategoriesDataFormInitObj.sourceObject;
        this.optionalCategoryNames = optionalCategoriesDataFormInitObj.categoryNames;
        console.log(this.optionalCategories);
        console.log(this.optionalCategoryNames);
    }

    getCategoryField(required: boolean, index: number): string {
        return Object.keys(required ? this.requiredCategories : this.optionalCategories)[index];
    }

    onSubmit() {
        this.requiredCategoriesForm.dataForm.validateAndCommitAll().then(res => {
            const x = JSON.parse(this.requiredCategoriesForm.dataForm.editedObject);
            console.log(x);
        });
    }

    styleForm() {}

    private initializeDataFormSource(categories: Category[]): AssignBudgetDataFormInitializationObject {
        const categoryNames = [];
        const sourceObject = categories.reduce((acc, category) => {
            const splitCategoryName = category.name.split(' ');
            categoryNames.push(this.getCategoryLabel(category));
            const camelCaseCategoryName = splitCategoryName.map((name, index) =>
                index === 0 ? name.charAt(0).toLowerCase() + name.slice(1) :
                              name.charAt(0).toUpperCase() + name.slice(1)
            ).join('');
            acc[camelCaseCategoryName] = 0;
            return acc;
        }, {});

        return {sourceObject, categoryNames} as AssignBudgetDataFormInitializationObject;
    }

    /**
     * Returns the passed in Category's name field title cased
     * @param category the Category we want to get the label for
     */
    private getCategoryLabel(category: Category): string {
        const splitCategoryName = category.name.split(' ');
        return splitCategoryName.map((name) =>
            name.charAt(0).toUpperCase() + name.slice(1)
        ).join(' ');
    }

}
