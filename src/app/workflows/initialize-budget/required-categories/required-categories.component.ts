import { Component, OnInit } from "@angular/core";
import { CategorySelectionItem } from "../../../models/category-selection-item.model";
import { MOCK_CATEGORIES } from "../../../mocks/category.mock.data";

@Component({
    selector: "required-categories-workflow",
    templateUrl: "required-categories.component.html",
    styleUrls: ["required-categories.component.css"]
})
export class RequiredCatgoriesWorkflowComponent implements OnInit {

    requiredCategories: CategorySelectionItem[];
    header: string = 'Set required spending categories';
    informationalHeader: string = `These are categories of spending that you cannot avoid throughout the month (Food, rent, etc.)`;

    ngOnInit() {
        // TODO: get this from service
        this.requiredCategories = MOCK_CATEGORIES
            .filter(category => category.required)
            .map(category => ({name: category.name, selected: false, showInResults: false}) as CategorySelectionItem);

    }

    handleCategorySelection(categories: CategorySelectionItem[]) {
        categories.forEach(category => console.log(category.name));
    }
}
