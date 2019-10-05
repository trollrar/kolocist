import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    public title: String = "";
    private _mainContentText: string;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
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
