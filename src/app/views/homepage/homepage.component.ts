import { Category } from '~/app/models/category.model';
import { CategoryListItem, CategoryType } from './../../models/category.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit } from "@angular/core";
import { DatePipe, CurrencyPipe } from "@angular/common";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { RadListView, ListViewScrollEventData } from 'nativescript-ui-listview';

@Component({
    selector: "ba-homepage",
    templateUrl: "homepage.component.html",
    styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {

    @ViewChild('categoryListView', {static: false}) categoryListView: ElementRef;
    @ViewChild('currentCategoryHeader', {static: false}) currentCategoryHeader: ElementRef;
    currentCategoryHeaderPosition: number = 0;  // absolute positioning of the sticky category header
    categoryListOffset: number = 0;             // the current offset of the list (how far the list has been scrolled)
    categoryHeaderHeight: number = 30;          // height of the category headers
    listItemHeight: number = 60;                // height of each list item
    currentListSectionHeight: number = 0;       // height of the currently displayed list section (not including header)
    currentListSectionIndex: number = 0;        // index that corresponds to the currently displayed list section
    currentCategory: CategoryListItem;          // the category that is currently displayed (the list section)

    showStickyHeader: boolean = true;
    stickyHeaderText: string = '';

    get currentDate(): string {
        return this.datePipe.transform(new Date(), 'MMM d, y');
    }

    get remainingDays(): any {
        const currentDate = new Date();
        const nextMonth = new Date(currentDate.getTime());
        nextMonth.setMonth(currentDate.getMonth() + 1);
        nextMonth.setDate(0);

        if (nextMonth.getDate() > currentDate.getDate()) {
            // today is not last day of the month
            return `${nextMonth.getDate() - currentDate.getDate() + 1} days remaining`;
        } else {
            // today is the last day of the month
            return 'Last day of month';
        }
    }

    get remainingBudget(): string {
        return `${this.currencyPipe.transform(this.dataService.userContext.remainingBudget)} remaining`;
    }

    get totalBudget(): string {
        return `(${this.currencyPipe.transform(this.dataService.userContext.totalBudget)} originally)`;

    }

    parsedCategories: CategoryListItem[];
    private _categories: ObservableArray<CategoryListItem>;
    get categories(): ObservableArray<CategoryListItem> {
        return this._categories;
    }

    constructor(
        private currencyPipe: CurrencyPipe,
        private datePipe: DatePipe,
        public dataService: DataService,
        private zone: NgZone
    ) {}

    ngOnInit() {
        this.generateCategoriesList();
    }

    ngAfterViewInit() {
        this.listViewScrollListener();
    }

    /**
     * Retrieves the list of categories and parses it into a format for the RadListView to consume.
     * This also initializes logic for sticky header/scroll calculations
     */
    generateCategoriesList() {
        this.parsedCategories = this.dataService.categories.reduce((categoryList, category) => {
            category.required ? categoryList[0].categories.push(category) : categoryList[1].categories.push(category);

            return categoryList;
        }, [
            {categoryType: CategoryType.REQUIRED, categories: []},
            {categoryType: CategoryType.OPTIONAL, categories: []}
           ] as CategoryListItem[]
        );

        let cumulativeListHeight = 0;
        this.parsedCategories.map((categoryItem) => {
            // need to add 1 to list item height to account for the list item divider of height 1
            categoryItem.listHeight = cumulativeListHeight + (this.listItemHeight + 1) * categoryItem.categories.length;
            cumulativeListHeight = categoryItem.listHeight + this.categoryHeaderHeight;
        });

        // initialize current category and header to the first category (for sticky header/scroll calculations)
        this.currentCategory = this.parsedCategories[0];
        this.stickyHeaderText = this.currentCategory.categoryType;

        this._categories = new ObservableArray(this.parsedCategories);
    }

    // TODO: route to category detail view
    /**
     * Invoked when a user taps on a category.
     */
    onCategorySelected(category: Category) {
        console.log('tapped');
        console.log(category);
    }

    /**
     * Listens to the RadListView's scroll event. Calculates the position and text in the sticky scroll header
     */
    private listViewScrollListener() {
        const listView = <RadListView>this.categoryListView.nativeElement;

        listView.on(RadListView.scrolledEvent, (data: ListViewScrollEventData) => {
            // TODO: check out what zone does. is there any benefit to running in the NgZone?
            this.zone.run(() => {
                if (data.scrollOffset > this.categoryListOffset) {
                    // user scrolled down
                    // if offset is greater than the current list section height, we are now in next list section
                    if (this.currentListSectionIndex !== this.parsedCategories.length - 1 &&
                        this.categoryListOffset >= this.parsedCategories[this.currentListSectionIndex].listHeight +
                                                  this.categoryHeaderHeight) {
                        this.currentListSectionIndex++;
                        this.currentCategory = this.parsedCategories[this.currentListSectionIndex];
                    }
                } else {
                    // user scrolled up
                    // if offset is less than the current list section height, we are now in previous list section
                    if (this.currentListSectionIndex !== 0 &&
                        this.categoryListOffset < this.parsedCategories[this.currentListSectionIndex - 1].listHeight +
                                                   this.categoryHeaderHeight) {
                        this.currentListSectionIndex--;
                        this.currentCategory = this.parsedCategories[this.currentListSectionIndex];
                    }
                }

                this.categoryListOffset = data.scrollOffset;                        // update value of list offset
                this.stickyHeaderText = this.currentCategory.categoryType;          // update current list header text
                this.currentListSectionHeight = this.currentCategory.listHeight;    // update current section height

                if (this.categoryListOffset < 0) {
                    // don't show header if scroll is negative (top of list and user scrolls up)
                    this.showStickyHeader = false;
                } else {
                    this.showStickyHeader = true;

                    // get position of the sticky header (animating in or out of list)
                    // only if the list offset is greater than the current list section height
                    // but less than the offset where the next header would be
                    if (this.categoryListOffset >= this.currentListSectionHeight &&
                        this.categoryListOffset <= this.currentListSectionHeight + this.categoryHeaderHeight) {
                        this.currentCategoryHeaderPosition = this.currentListSectionHeight - this.categoryListOffset;
                    } else {
                        this.currentCategoryHeaderPosition = 0;
                    }
                }
            });
        });
    }
}
