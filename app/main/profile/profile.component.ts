import { Component, OnInit } from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public title:String;

    constructor(page: Page, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
    }


    public goOnMap() {
        this.routerExtensions.navigate(['main/map'])
        this.title = 'Map'
    }
    public goOnAdd() {
        this.routerExtensions.navigate(['main/add-item'])
    }
    public goOnStole() {
        this.routerExtensions.navigate(['main/stolen-item'])
    }
  ngOnInit() {
  }

}
