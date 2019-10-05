import { Component, OnInit } from '@angular/core';
import {Page} from "tns-core-modules/ui/page";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public mapSrc:String = "~/map/map_data/map.html";

  constructor(page:Page) {
      page.actionBarHidden = true;
  }

  ngOnInit() {
  }

}
