import {Component, OnInit} from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import {BarcodeScanner} from "nativescript-barcodescanner";

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

    constructor(private barcodeScanner: BarcodeScanner, page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
    }

    public onScan() {
        this.barcodeScanner.scan({
            formats: "QR_CODE",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: false,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500,
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only
        }).then((result) => {
                console.log({
                    title: "You Scanned ",
                    message: "Format: " + result.format + ",\nContent: " + result.text,
                    okButtonText: "OK"
                });
            }, (errorMessage) => {
                console.log("Error when scanning " + errorMessage);
            }
        );
    }

}
