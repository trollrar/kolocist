import { Component, OnInit } from '@angular/core';
import {Page} from "tns-core-modules/ui/page";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public mapSrc:String = `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="https://js.arcgis.com/4.11/esri/themes/light/main.css">
    <script src="https://js.arcgis.com/4.11/"></script>

    <title>ArcGIS JavaScript Tutorials: Create a JavaScript starter app</title>
    <style>
      html, body, #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }
    </style>
    <script>
  require([
      "esri/Map",
      "esri/views/MapView"
    ], function(Map, MapView) {

    var map = new Map({
      basemap: "topo-vector"
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-118.80500, 34.02700], // longitude, latitude
      zoom: 13
    });
  });
  </script>
    
  </head>
  <body>
    <div id="viewDiv"></div>
  </body>
</html>

  `;

  constructor(page:Page) {
      page.actionBarHidden = true;
  }

  ngOnInit() {
  }

}
