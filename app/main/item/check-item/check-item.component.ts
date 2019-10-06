import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";
import {Item, ItemService} from "../items.service";

@Component({
  selector: 'app-check-item',
  templateUrl: './check-item.component.html',
  styleUrls: ['./check-item.component.css']
})
export class CheckItemComponent implements OnInit {

  //public btnClass:string = "profile-button btn-rounded-lg button-background-${status}";
  private status:string = "query"
  public btnText:string = "?";
  public queryId: string = "";
  item: Item = null;

  public getClass(): string {
    return "profile-button btn-rounded-lg button-background-" + this.status;
  }

  constructor(page: Page, private itemService: ItemService) {
    page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  public onTap() {
    if (this.queryId != "") {
      let found = this.itemService.getByBikeId(this.queryId);
      if (found.length === 1) {
        this.status = "stolen";
        this.btnText = "x"
        this.item = found[0];
      } else {
        this.status = "ok";
        this.btnText = "✔";
        this.item = null;
      }
    }
  }

}
