import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from "@angular/core";
import { TextView } from "tns-core-modules/ui/text-view";
import { EventData } from 'tns-core-modules/ui/page';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
import { CategorySelectionItem } from "../../models/category-selection-item.model";

@Component({
    selector: "ba-category-search",
    templateUrl: "category-search.component.html",
    styleUrls: ['category-search.component.css']
})
export class CategorySearchComponent implements OnInit {

    /**
     * Header. Displayed at top of screen
     */
    @Input() header: string;

    /**
     * Informational header. Displayed right below the header
     */
    @Input() informationalHeader: string;

    /**
     * Existing categories from previous months that will be part of the search results of the autocomplete input
     */
    @Input() categorySelectionItems: CategorySelectionItem[];

    /**
     * Height of the categorySearchField input element
     */
    @Input() inputFieldHeight: number = 20;

    @Output() selectedCategories = new EventEmitter<CategorySelectionItem[]>();

    /**
     * Reference to the category search autocomplete input
     */
    @ViewChild('categorySearchField', {static: false}) categorySearchField: TextView;

    // value of the input in categorySearchField
    categoryInputValue: string;

    // FormControl set on categorySearchField. Used to subscribe to input value changes in categorySearchField
    searchControl = new FormControl();

    // resulting matches of the autocomplete search
    resultsList: CategorySelectionItem[];

    // flag indicating if categorySearchField input values provide no autocomplete results
    noResults = true;

    // flag indicating if user is in the "middle" of a search and not starting from an empty search field
    waitForFirstDebounce = false;

    // flag indicating if the search is empty
    noInput = true;

    // indicates if input has been changed. Tied to the output of ngModel on categorySearchField
    inputChanged = false;

    ngOnInit() {
        this.initializeSearchInputListener();
    }

    /**
     * Initializes subscription to value changes in categorySearchField (searchControl form control).
     * Debounces input changes by 500 milliseconds, at which point last emitted input string is
     * parsed for search results in getSearchResults()
     */
    initializeSearchInputListener(): void {
        // when there is no input
            // show nothing
            // on type: wait for search results to compute (getSearchResults to finish) before showing ANYTHING
        // when there is input
            // show previous search results until updating
            // on type: show previous result until getSearchResults finishes
        this.searchControl.valueChanges.pipe(
            tap((value) => {
                if (!value) {
                    this.waitForFirstDebounce = false;
                    this.inputChanged = false;
                }
                this.noInput = !value;
            }),
            debounceTime(500)
        ).subscribe((value) => {
            this.getSearchResults(value);
        });
    }

    /**
     * Takes the value parameter and searches categorySelectionItems for matching values
     * where category is not selected and the name starts with the value parameter
     * @param value the current user inputted string value in categorySearchField
     */
    getSearchResults(value: string): void {
        this.resultsList = [];
        this.categorySelectionItems.forEach((category) => {
            if (!category.selected) {
                // if category is already selected then dont show in results
                // otherwise check if input string is what begins the category name
                if (category.name.split(' ').some(categoryName => categoryName.startsWith(value))) {
                    this.resultsList.push(category);
                }
            }
        });
        this.noResults = !(this.resultsList.length > 0);
        if (!this.waitForFirstDebounce && this.inputChanged) {
           this.waitForFirstDebounce = true;
        }
    }

    /**
     * Invoked on click of the X button on selected category chips. Used to remove category from overall selection
     * @param unselectedCategory the category that is to be unselected
     */
    unselectCategory(unselectedCategory: CategorySelectionItem) {
        this.categorySelectionItems
            .filter(category => category.name === unselectedCategory.name)
            .map(category => category.selected = false);
    }

    /**
     * Invoked when user presses return key on keyboard when using categorySearchField.
     * Calls addCategory() and resets input field
     * @param args TextField event emitted when return is pressed
     */
    onReturnPress(args: EventData) {
        const tv = args.object as TextView;
        this.addCategory(tv.text);
        this.categoryInputValue = undefined;
    }

    /**
     * Adds new category to be selected. If there is no input or the category is already selected, do nothing.
     * If the category exists and is not selected, set to selected. If it doesn't exist, create a new category and
     * set it to selected
     * @param newCategory the name of the new category that is to be selected
     */
    addCategory(newCategory: string) {
        if (newCategory.trim() === '') {
            return;
        }
        let existingCategory = this.categorySelectionItems
                                .find(category => category.name.toLowerCase() === newCategory.toLowerCase());
        if (existingCategory) {
            // if category already exists, if its unselected set to selected
            if (!existingCategory.selected) {
                this.categorySelectionItems
                    .filter(category => category.name.toLowerCase() === newCategory.toLowerCase())
                    .map(category => category.selected = true);
            }
        } else {
            // if category does not exist, add it
            this.categorySelectionItems.push({name: newCategory, selected: true} as CategorySelectionItem)
        }
    }

    /**
     * Clears the categorySearchField input
     */
    clearText(): void {
        this.categoryInputValue = undefined;
    }

    /**
     * Returns true if there are currently any selected categories. Used to determine whether to display no categories
     * selected message, or to display the categories that are selected
     */
    hasSelectedCategories(): boolean {
        return this.categorySelectionItems.some(category => category.selected);
    }

    /**
     * Invoked when item in autocomplete results list is tapped.
     * Will try to add the category and then clear the input field
     * @param args ListViewItem event that is emitted when list item is tapped
     */
    onItemTap(args: ItemEventData): void {
        const selectedCategory = this.resultsList[args.index].name;
        this.addCategory(selectedCategory);
        this.clearText();
    }

    /**
     * Invoked when user hits confirm button.
     * This will save the selected categories and proceed to next page in workflow
     */
    confirmCategorySelections(): void {
        const selectedCategories = this.categorySelectionItems.filter(category => category.selected);
        this.selectedCategories.emit(selectedCategories);
    }
}
