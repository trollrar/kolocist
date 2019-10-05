import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import * as geolocation from "nativescript-geolocation";
import {Accuracy} from "tns-core-modules/ui/enums";
import {WebView} from "ui/web-view";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('mywebview', {static: false}) webview: WebView;

  private latitude: String = "-46";
  private longitude: String = "14.5"

  constructor(page: Page) {
    page.actionBarHidden = true;
  }

  ngOnInit() {
    let that = this;
    geolocation.enableLocationRequest().then(r =>
        geolocation.getCurrentLocation(
            {
              desiredAccuracy: Accuracy.high,
              maximumAge: 5000,
              timeout: 20000
            })
            .then(function (loc) {
              that.latitude = loc.latitude.toString();
              that.longitude = loc.longitude.toString();
              that.webview.nativeView.reload();
            })
    );
  }

  getMapSrc():String {
    return `
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
      "esri/views/MapView"/*,
      "esri/Graphic",
      "esri/GraphicsLayer"*/
    ], function(Map, MapView/*, Graphic, GraphicsLayer*/) {

    var map = new Map({
      basemap: "topo-vector"
    });
    
    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [${this.longitude}, ${this.latitude}], // longitude, latitude
      zoom: 15
    });
    /*
    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    
    var point = {
      type: "point",
      longitude: ${ this.longitude },
      latitude: ${ this.latitude }
    };
    
    var simpleMarkerSymbol = {
     type: "simple-marker",
     color: [226, 119, 40],  // orange
     outline: {
       color: [255, 255, 255], // white
       width: 1
      }
    };
    
    var pointGraphic = new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol
    });
    
    graphicsLayer.add(pointGraphic);*/
  });
  </script>
    
  </head>
  <body>
    <div id="viewDiv"></div>
  </body>
</html>

  `;
  }

}
