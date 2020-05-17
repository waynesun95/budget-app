import { Category } from './../models/category.model';
import { MOCK_CATEGORIES } from './../mocks/category.mock.data';
import { UserContext } from './../models/user-context.model';
import { MOCK_USER_CONTEXT } from './../mocks/user-context.mock.data';
import { MOCK_EXPENSES } from './../mocks/expense.mock.data';
import { Expense } from './../models/expense.model';
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    // TODO: Turn this into a mock server module

    private _expenses = MOCK_EXPENSES;
    private _userContext = MOCK_USER_CONTEXT;
    private _categories = MOCK_CATEGORIES;

    get expenses(): Expense[] {
        return this._expenses;
    }

    get userContext(): UserContext {
        return this._userContext;
    }

    get categories(): Category[] {
        return this._categories;
    }

}
