import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from "../items.service";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import {Page} from "tns-core-modules/ui/page";
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    items: Array<Item>;
    
    constructor(private _itemService: ItemService, page: Page, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.items = this._itemService.getUserItems(1);
    }

    onItemTap(args: ItemEventData) {
        console.log(`Index: ${args.index}; View: ${args.view} ; Item: ${this.items[args.index]}`);
    }

    onReport(id: number) {
        this.routerExtensions.navigate(['main/stolen-item', id]);
    }
}
