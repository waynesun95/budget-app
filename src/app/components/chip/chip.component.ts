import { Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: "ba-chip",
    templateUrl: "chip.component.html",
    styleUrls: ['chip.component.css']
})
export class ChipComponent {

    @Input() text: string;
    @Input() data: any;     // any data you want to pass to component. will be emitted when close is clicked
    @Input() marginTop = 2.5;
    @Input() marginRight = 5;
    @Input() marginBottom = 2.5;

    @Output() close = new EventEmitter<any>();


}
