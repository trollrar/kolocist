import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from "../items.service";
import { ItemEventData } from "tns-core-modules/ui/list-view";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    items: Array<Item>;

    constructor(private _itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onItemTap(args: ItemEventData) {
        console.log(`Index: ${args.index}; View: ${args.view} ; Item: ${this.items[args.index]}`);
    }
}
