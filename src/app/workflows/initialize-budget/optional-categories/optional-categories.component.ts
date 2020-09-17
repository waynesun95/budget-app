import { Component, OnInit } from "@angular/core";
import { CategorySelectionItem } from "../../../models/category-selection-item.model";
import { MOCK_CATEGORIES } from "../../../mocks/category.mock.data";

@Component({
    selector: "optional-categories-workflow",
    templateUrl: "optional-categories.component.html",
    styleUrls: ["optional-categories.component.css"]
})
export class OptionalCategoriesWorkflowComponent implements OnInit {

    requiredCategories: CategorySelectionItem[];
    header: string = 'Set optional spending categories';
    informationalHeader: string = `These are categories of spending that are optional throughout the month (Fun, Brokerage, etc.)`;

    ngOnInit() {
        // TODO: get this from service
        this.requiredCategories = MOCK_CATEGORIES
            .filter(category => !category.required)
            .map(category => ({name: category.name, selected: false, showInResults: false}) as CategorySelectionItem);

    }

    handleCategorySelection(categories: CategorySelectionItem[]) {
        categories.forEach(category => console.log(category.name));
    }
}
