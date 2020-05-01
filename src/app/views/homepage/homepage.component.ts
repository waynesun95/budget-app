import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ba-homepage",
    templateUrl: "homepage.component.html",
    styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit {

    ngOnInit() {
        console.log('HomepageComponent initiailzed');
    }
}
