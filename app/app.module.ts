import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {MapComponent} from "./main/map/map.component";
import {ProfileComponent} from './main/profile/profile.component';
import {NativeScriptUISideDrawerModule} from "nativescript-ui-sidedrawer/angular";
import {AddItemComponent} from './main/item/add-item/add-item.component';
import {ListItemComponent} from './main/item/list-item/list-item.component';
import {StolenItemComponent} from './main/item/stolen-item/stolen-item.component';
import {CheckItemComponent} from './main/item/check-item/check-item.component';
import {BarcodeScanner} from "nativescript-barcodescanner";
import {TNSCheckBoxModule} from "@nstudio/nativescript-checkbox/angular";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
    providers: [BarcodeScanner],
    declarations: [
        AppComponent,
        MainComponent,
        MapComponent,
        ProfileComponent,
        AddItemComponent,
        ListItemComponent,
        AddItemComponent,
        StolenItemComponent,
        CheckItemComponent
    ],
    imports: [
        TNSCheckBoxModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
