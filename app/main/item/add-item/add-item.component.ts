import {Component, OnInit} from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import {BarcodeScanner} from "nativescript-barcodescanner";

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

    public selecting = true;

    constructor(private barcodeScanner: BarcodeScanner, page: Page) {
        page.actionBarHidden = true;

    }

    ngOnInit() {
    }

    ngOnViewInit() {
        var dialogs = require("tns-core-modules/ui/dialogs");
        dialogs.confirm({
            title: "Your title",
            message: "Your message",
            okButtonText: "Your button text",
            cancelButtonText: "Cancel text",
            neutralButtonText: "Neutral text"
        }).then(function (result) {
            // result argument is boolean
            console.log("Dialog result: " + result);
        });
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
