import { CategorySelectionItem } from './../../models/category-selection-item.model';
import { Category } from '~/app/models/category.model';
import { MOCK_CATEGORIES } from './../../mocks/category.mock.data';
import { Injectable } from "@angular/core";

@Injectable()
export class InitializeBudgetWorkflowService {
    private _budget: number = 0;
    set budget(value: number) {
        this._budget = value;
        console.log(value)
    }
    get budget(): number {
        return this._budget;
    }

    private _previousMonthNetRemainingBudget: number;
    set previousMonthNetRemainingBudget(value: number) {
        this._previousMonthNetRemainingBudget = value;
    }
    get previousMonthNetRemainingBudget(): number {
        return 300; // TODO: placeholder for testing
        // return this._previousMonthNetRemainingBudget;
    }

    private _requiredCategories: Category[];
    set requiredCategories(categories: Category[]) {
        this._requiredCategories = categories;
    }
    get requiredCategories(): Category[] {
        // TODO: placeholder for testing
        return MOCK_CATEGORIES.filter(category => category.required);
        // return this._requiredCategories;
    }

    private _optionalCategories: Category[];
    set optionalCategories(categories: Category[]) {
        this._optionalCategories = categories;
    }
    get optionalCategories(): Category[] {
        // TODO: placeholder for testing
        return MOCK_CATEGORIES.filter(category => !category.required);
        // return this._optionalCategories;
    }

    /**
     * This method converts a CategorySelectionItem to a Category. Used to save category selections after the
     * required and optional category selection screens
     * @param selectionItem a CategorySelectionItem that has been selected that we want to convert to Category
     * @param required whether the category selected should be required or optional
     */
    public parseCategoryFromSelection(selectionItem: CategorySelectionItem, required: boolean): Category {
        return {
            name: selectionItem.name,
            required,
            totalBudget: 0,
            remainingBudget: 0
        } as Category;
    }
}
