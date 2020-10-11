import { Component, OnInit } from "@angular/core";
import { CategorySelectionItem } from "../../../models/category-selection-item.model";
import { MOCK_CATEGORIES } from "../../../mocks/category.mock.data";
import { Page } from "tns-core-modules/ui/page";
import { InitializeBudgetWorkflowService } from "../intialize-budget-workflow.service";

@Component({
    selector: "optional-categories-workflow",
    templateUrl: "optional-categories.component.html",
    styleUrls: ["optional-categories.component.css"]
})
export class OptionalCategoriesWorkflowComponent implements OnInit {

    requiredCategories: CategorySelectionItem[];
    header: string = 'Set optional spending categories';
    informationalHeader: string = `These are categories of spending that are optional throughout the month (Fun, Brokerage, etc.)`;

    constructor(
        private page: Page,
        private initializeBudgetWorkflowService: InitializeBudgetWorkflowService
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
        // TODO: get this from service
        this.requiredCategories = MOCK_CATEGORIES
            .filter(category => !category.required)
            .map(category => ({name: category.name, selected: false, showInResults: false}) as CategorySelectionItem);

    }

    handleCategorySelection(categories: CategorySelectionItem[]) {
        this.initializeBudgetWorkflowService.optionalCategories = categories.map(category =>
            this.initializeBudgetWorkflowService.parseCategoryFromSelection(category, false)
        );
        categories.forEach(category => console.log(category.name));
    }
}
