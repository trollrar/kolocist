import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {RouterExtensions} from "nativescript-angular";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    public title: String;

    constructor(private _changeDetectionRef: ChangeDetectorRef, private routerExtensions: RouterExtensions, private router: Router) {
        switch (this.router.url) {
            case '/main/profile': this.title = "Profile"; break;
            case '/main/list-item': this.title = "List Item"; break;
        }
    }

    @ViewChild(RadSideDrawerComponent, {static: false}) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }



    ngOnInit() {
    }

    public setTitle(title: String) {
        this.title = title;
        this.onCloseDrawerTap();
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }
}
