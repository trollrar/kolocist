import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Item, ItemService} from "../items.service";
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'app-stolen-item',
  templateUrl: './stolen-item.component.html',
  styleUrls: ['./stolen-item.component.css']
})
export class StolenItemComponent implements OnInit {

  public item: Item;
    public loc: String;


    constructor(private route: ActivatedRoute, private _itemService: ItemService, private router: RouterExtensions) {
    this.item = _itemService.getByID(route.params['_value'].id)
  }

  onReport() {
    this.item.stolen=true;
    this.router.navigate(['main/list-item']);
  }

    onBack() {
        this.router.navigate(['main/list-item']);
    }

  ngOnInit() {
  }

}
