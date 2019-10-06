import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Page} from "tns-core-modules/ui/page";
import {BarcodeScanner} from "nativescript-barcodescanner";
import * as camera from "nativescript-camera";
import {Image} from "ui/image";
import {ImageSource} from "image-source";
import {knownFolders, path} from "file-system";
import {getUUID} from "nativescript-uuid";
import {Item, ItemService} from "../items.service";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

    public status:string;
    public selecting = true;
    public name:string = "";
    public itemId:string = "";
    public value:string = "";
    private savedImage:string = "";

    public imgBtnSrc:String = "res://camera_icon";
    public imgBtnClass:String = "icon";

    constructor(private barcodeScanner: BarcodeScanner, page: Page, private itemService: ItemService, private router: RouterExtensions) {
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

    public takePicture() {
      let thisObject = this;
        camera.requestPermissions().then(
            function success() {
                let options = {width: 400, height: 300, keepAspectRatio:true, saveToGallery: false };
                camera.takePicture(options).then((imageAsset) => {
                    console.log("Image taken");
                    const source = new ImageSource();
                    source.fromAsset(imageAsset).then((imageSource: ImageSource) => {
                      const folderPath = knownFolders.documents().path;
                      const uuid = getUUID();
                      const fileName = uuid.toString() + ".jpg";
                      thisObject.savedImage = path.join(folderPath, fileName);
                      const saved: boolean = imageSource.saveToFile(thisObject.savedImage, "jpg");
                      if (saved) {
                        thisObject.imgBtnClass = "btn-rounded-lg img-btn"
                        thisObject.imgBtnSrc = thisObject.savedImage;
                        console.log("Saved: " + thisObject.savedImage);
                        console.log("Image saved successfully!");
                      } else {
                        console.log("Couldn't save image");
                      }
                    });
                })
            },
            function failure() {
                console.log("Can't take image");
            }
        );
    }

    public saveItem() {
      if (this.savedImage != "" && this.name != "" && this.itemId != "" && this.value != "") {
        let newItem = new Item(this.itemService.getNextId(), this.itemId, 1, this.name, this.savedImage, this.value, false, false);
        this.itemService.addItem(newItem);
        console.log(newItem);
        this.selecting = true;
        this.status = 'Shranjeno!';

      } else {
        console.log("couldnt save");
      }
    }
}
