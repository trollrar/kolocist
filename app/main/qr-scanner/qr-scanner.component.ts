import { Component, OnInit } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
import {Page} from "tns-core-modules/ui/page";
registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements OnInit {

  constructor(page: Page) {
    page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  onScanResult($event) {
    console.log($event);
  }
}
