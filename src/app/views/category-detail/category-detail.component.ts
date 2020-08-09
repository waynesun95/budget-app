import { SortingCriteria } from './../../models/util.model';
import { ExpenseListItem } from './../../models/expense.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit } from "@angular/core";
import { Expense } from '~/app/models/expense.model';
import { RadListView, ListViewScrollEventData } from 'nativescript-ui-listview';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "ba-category-detail",
    templateUrl: "category-detail.component.html",
    styleUrls: ['category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit, AfterViewInit {

    @ViewChild('expenseListView', {static: false}) expenseListView: ElementRef;
    @ViewChild('currentExpenseDateHeader', {static: false}) currentExpenseDateHeader: ElementRef;
    currentExpenseDateHeaderPosition: number = 0;   // absolute positioning of the sticky expense date header
    expenseListOffset: number = 0;                  // the current offset of the list (how far the list has been scrolled)
    expenseDateHeaderHeight: number = 30;           // height of the category headers
    listItemHeight: number = 70;                    // height of each list item
    currentListSectionHeight: number = 0;           // height of the currently displayed list section (not including header)
    currentListSectionIndex: number = 0;            // index that corresponds to the currently displayed list section
    currentExpenseDate: ExpenseListItem;            // the expense date that is currently displayed (the list section)

    showStickyHeader: boolean = true;
    stickyHeaderText: string = '';

    categoryName = 'Category Name';
    noExpenses = false;

    parsedExpenses: ExpenseListItem[];
    private _expenses: ObservableArray<ExpenseListItem>;
    get expenses(): ObservableArray<ExpenseListItem> {
        return this._expenses;
    }

    constructor(
        private dataService: DataService,
        private zone: NgZone,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        // TODO: Add loading spinner!
        this.categoryName = (this.activatedRoute.params as any)._value.category;
        this.intializeExpenses();
    }

    ngAfterViewInit() {
        if (!this.noExpenses) {
            this.listViewScrollListener();
        }
    }

    /**
     * Initializes expenses for RadListView
     */
    intializeExpenses() {
        const expenses = this.dataService.expenses.filter((expense: Expense) => expense.category === this.categoryName);
        if (expenses.length === 0) {
            this.noExpenses = true;
            return;
        }
        const expensesObj = {};
        for (const expense of expenses) {
            const expenseDate = expense.date;
            if (expensesObj[expenseDate]) {
                expensesObj[expenseDate].push(expense);
            } else {
                expensesObj[expenseDate] = [expense];
            }
        }

        this.parsedExpenses = Object.keys(expensesObj).map((expenseDate) => {
            // tslint:disable-next-line: no-object-literal-type-assertion
            return {
                date: expenseDate,
                expenses: expensesObj[expenseDate]
            } as ExpenseListItem;
        }).sort((expenseA, expenseB) => this.sortExpenses(expenseA, expenseB, SortingCriteria.DATE_DESCENDING));

        let cumulativeListHeight = 0;
        this.parsedExpenses.map((expenseItem) => {
            // need to add 1 to list item height to account for the list item divider of height 1
            expenseItem.listHeight = cumulativeListHeight + (this.listItemHeight + 1) * expenseItem.expenses.length;
            cumulativeListHeight = expenseItem.listHeight + this.expenseDateHeaderHeight;
        });

        // initialize current expense date and header to the most recent date (for sticky header/scroll calculations)
        this.currentExpenseDate = this.parsedExpenses[0];
        this.stickyHeaderText = this.currentExpenseDate.date;

        this._expenses = new ObservableArray(this.parsedExpenses);
    }

    // TODO: add other sort methods and add to SortingCriteria enum appropriately
    /**
     * Method to sort expenses based on criteria
     * @param expenseA expense to be compared against expenseB during sorting
     * @param expenseB expense to be compared against expenseA during sorting
     * @param sortingCriteria criteria to sort expenses list by
     */
    sortExpenses(expenseA: ExpenseListItem, expenseB: ExpenseListItem, sortingCriteria: SortingCriteria) {
        switch (sortingCriteria) {
            case SortingCriteria.DATE_DESCENDING:
                return expenseA.date > expenseB.date ? -1 : 1;
        }
    }

    /**
     * Invoked when an expense in the expense list is tapped
     * @param expense the expense that was tapped
     */
    onExpenseSelected(expense: Expense) {
        console.log('Expense selected');
        console.log(expense);
    }

    // TODO: consolidate into a util function
    /**
     * Listens to the RadListView's scroll event. Calculates the position and text in the sticky scroll header
     */
    private listViewScrollListener() {
        const listView = <RadListView>this.expenseListView.nativeElement;

        listView.on(RadListView.scrolledEvent, (data: ListViewScrollEventData) => {
            // TODO: check out what zone does. is there any benefit to running in the NgZone?
            this.zone.run(() => {
                if (data.scrollOffset > this.expenseListOffset) {
                    // user scrolled down
                    // if offset is greater than the current list section height, we are now in next list section
                    if (this.currentListSectionIndex !== this.parsedExpenses.length - 1 &&
                        this.expenseListOffset >= this.parsedExpenses[this.currentListSectionIndex].listHeight +
                                                  this.expenseDateHeaderHeight) {
                        this.currentListSectionIndex++;
                        this.currentExpenseDate = this.parsedExpenses[this.currentListSectionIndex];
                    }
                } else {
                    // user scrolled up
                    // if offset is less than the current list section height, we are now in previous list section
                    if (this.currentListSectionIndex !== 0 &&
                        this.expenseListOffset < this.parsedExpenses[this.currentListSectionIndex - 1].listHeight +
                                                 this.expenseDateHeaderHeight) {
                        this.currentListSectionIndex--;
                        this.currentExpenseDate = this.parsedExpenses[this.currentListSectionIndex];
                    }
                }

                this.expenseListOffset = data.scrollOffset;                         // update value of list offset
                this.stickyHeaderText = this.currentExpenseDate.date;               // update current list header text
                this.currentListSectionHeight = this.currentExpenseDate.listHeight; // update current section height

                if (this.expenseListOffset < 0) {
                    // don't show header if scroll is negative (top of list and user scrolls up)
                    this.showStickyHeader = false;
                } else {
                    this.showStickyHeader = true;

                    // get position of the sticky header (animating in or out of list)
                    // only if the list offset is greater than the current list section height
                    // but less than the offset where the next header would be
                    if (this.expenseListOffset >= this.currentListSectionHeight &&
                        this.expenseListOffset <= this.currentListSectionHeight + this.expenseDateHeaderHeight) {
                        this.currentExpenseDateHeaderPosition = this.currentListSectionHeight - this.expenseListOffset;
                    } else {
                        this.currentExpenseDateHeaderPosition = 0;
                    }
                }
            });
        });
    }
}
