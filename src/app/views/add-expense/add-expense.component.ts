import { DataService } from './../../services/data.service';
import { NewExpenseModel, NewExpense, NewExpenseFormField } from './../../models/new-expense.model';
import { Component, OnInit, ViewChild } from "@angular/core";
import { PropertyEditor, RadDataForm, DataFormEventData, EntityProperty } from 'nativescript-ui-dataform';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { DatePipe } from '@angular/common';
import { Color } from 'tns-core-modules/color/color';

@Component({
    selector: "ba-add-expense",
    templateUrl: "add-expense.component.html",
    styleUrls: ['add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

    @ViewChild('newExpenseForm', {static: false}) newExpenseForm: RadDataFormComponent;

    NewExpenseFormField = NewExpenseFormField;
    colorWhite = new Color('#ffffff');

    private _newExpense: NewExpense;
    get newExpense(): NewExpense {
        return this._newExpense;
    }

    // TODO: setter based on user data
    private _paymentTypes = ['Credit Card', 'Debit Card', 'Cash'];
    get paymentTypes(): string {
        return this._paymentTypes.join(', ');
    }

    // TODO: get this from the user data
    get expenseCategories(): string {
        return this.dataService.categories.reduce((categoryOptions, category) => {
            categoryOptions.push(category.name);
            return categoryOptions;
        }, []).join(', ');
    }

    constructor(
        private dataService: DataService,
        private datePipe: DatePipe
    ) {}

    ngOnInit() {
        // YYYY-MM-DD
        // hh:mm (military time)
        const [currentDate, currentTime] = this.datePipe.transform(new Date(), 'yyyy-MM-dd,HH:mm').split(',');
        console.log(currentDate, currentTime);
        console.log((new Date()).toString());
        this._newExpense = new NewExpense(null, currentDate, currentTime, '0.00', '', '', null);
        console.log(this.newExpense);
        this.initializeDataForm();
    }

    initializeDataForm() {
        /*----- Title -----*/
        // Display: Expense Title
        // Editor: Text
        // Required

        /*----- Date -----*/
        // Display: Date of Expense
        // Editor: DatePicker
        // Required (Default to current date)

        /*----- Time -----*/
        // Display: Time of Expense
        // Editor: TimePicker
        // Required (Default to current time)

        /*----- Amount -----*/
        // Display: Expense Amount
        // Editor: Decimal
        // Required (Default to 0.00)

        /*----- Payment Type -----*/
        // Display: Payment Type
        // Editor: Picker (Get payment types from user input/settings)
        // Required (Default to first item in list...for now...)
        // TODO: Allow users to set default payment type? Maybe default to most used payment type?

        /*----- Category -----*/
        // Display: Expense Category
        // Editor: Picker (Get expense categories from user input/settings)
        // Required (No default)

        /*----- Notes -----*/
        // Display: Notes
        // Editor: MultilineText
        // Optional

    }

    styleForm(args: DataFormEventData) {
        const dataForm = <RadDataForm>args.object;
        const entityProperty = <EntityProperty>dataForm.getPropertyByName(args.propertyName);
        const editor = args.editor;
        const editorType = entityProperty.editor.type;
        let coreEditor;
        console.log(args.propertyName);

        switch (args.propertyName) {
            case NewExpenseFormField.AMOUNT:
                break;
            case NewExpenseFormField.CATEGORY:
                // coreEditor = args.editor.editor;
                // // coreEditor.subviews[0].backgroundColor = this.colorWhite.ios;
                // coreEditor.subviews[0].setValueForKeyPath(this.colorWhite.ios, 'textColor');
                // args.editor.editor.subviews[0].setValueForKey(this.colorWhite.ios, "textColor");
                // entityProperty.editor.ios.editor.setValueForKeyPath(this.colorWhite.ios, "textColor");
                break;
            case NewExpenseFormField.DATE:
                // coreEditor = args.editor.editor;
                // // coreEditor.subviews[0].backgroundColor = this.colorWhite.ios;
                // coreEditor.subviews[0].setValueForKeyPath(this.colorWhite.ios, 'textColor');
                entityProperty.editor.ios.editor.setValueForKey(this.colorWhite.ios, 'textColor');
                break;
            case NewExpenseFormField.NOTES:
                break;
            case NewExpenseFormField.PAYMENT_TYPE:
                // args.editor.editor.subviews[0].setValueForKey(this.colorWhite.ios, "textColor");
                // entityProperty.editor.ios.editor.setValueForKeyPath(this.colorWhite.ios, "textColor");
                break;
            case NewExpenseFormField.TIME:
                // coreEditor = args.editor.editor;
                // // coreEditor.subviews[0].backgroundColor = this.colorWhite.ios;
                // coreEditor.subviews[0].setValueForKeyPath(this.colorWhite.ios, 'textColor');
                entityProperty.editor.ios.editor.setValueForKey(this.colorWhite.ios, 'textColor');
                break;
            case NewExpenseFormField.TITLE:
                // Update editor padding
                // const editorInsets = new UIEdgeInsets({ top: 10, left: 5, bottom: 10, right: 5 });
                // editor.style.insets = editorInsets;

                // Update core editor padding
                // const coreEditorInsets = new UIEdgeInsets({ top: this._coreEditorPaddingVertical, left: this._coreEditorPaddingHorizontal, bottom: this._coreEditorPaddingVertical, right: this._coreEditorPaddingHorizontal });
                // if (this._editorHasValueLabel(editorType)) {
                //     editor.showAccessoryImage = false;
                // }
                // editor.editorCore.insets = coreEditorInsets;

                // Update core editor background
                const layer = editor.editorCore.layer;
                // layer.borderColor = this._strokeColor.ios.CGColor;
                // layer.borderWidth = this._strokeWidth;
                // layer.cornerRadius = this._cornerRadius;
                break;
            default:
                break;
        }
    }

    onSubmit() {
        console.log(this.newExpenseForm);
        this.newExpenseForm.dataForm.validateAndCommitAll().then(res => {
            console.log(res);
            console.log(this.newExpenseForm.dataForm.editedObject);
        });
    }
}
