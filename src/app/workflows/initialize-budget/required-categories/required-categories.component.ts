import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit } from "@angular/core";
import { CategorySelectionItem } from "../../../models/category-selection-item.model";
import { MOCK_CATEGORIES } from "../../../mocks/category.mock.data";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "required-categories-workflow",
    templateUrl: "required-categories.component.html",
    styleUrls: ["required-categories.component.css"]
})
export class RequiredCatgoriesWorkflowComponent implements OnInit {

    requiredCategories: CategorySelectionItem[];
    header: string = 'Set required spending categories';
    informationalHeader: string = `These are categories of spending that you cannot avoid throughout the month (Food, rent, etc.)`;

    constructor(private page: Page, private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
        // TODO: get this from service
        this.requiredCategories = MOCK_CATEGORIES
            .filter(category => category.required)
            .map(category => ({name: category.name, selected: false, showInResults: false}) as CategorySelectionItem);

    }

    handleCategorySelection(categories: CategorySelectionItem[]) {
        categories.forEach(category => console.log(category.name));
        this.routerExtensions.navigate(['initialize-budget/optional-categories']);
    }
}
