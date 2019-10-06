import { Component, OnInit } from '@angular/core';
import {Page} from "tns-core-modules/ui/page";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(page: Page) {
        page.actionBarHidden = true;
    }

  ngOnInit() {
  }

}
