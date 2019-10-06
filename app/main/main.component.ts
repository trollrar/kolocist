import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    public title: String = "";

    constructor(private _changeDetectionRef: ChangeDetectorRef, private routerExtensions: RouterExtensions) {
    }

    @ViewChild(RadSideDrawerComponent, {static: false}) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        this.title = 'Profile';
        this.routerExtensions.navigate(['main/profile'])}

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
