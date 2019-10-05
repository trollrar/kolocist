import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
    ngOnInit(): void {
    }
/*
    items: Array<Item>;

    constructor(private _itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onItemTap(args: ItemEventData) {
        console.log(`Index: ${args.index}; View: ${args.view} ; Item: ${this.items[args.index]}`);
    }
    */
}
