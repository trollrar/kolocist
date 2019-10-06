import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import {MapComponent} from "./main/map/map.component";
import {ProfileComponent} from "./main/profile/profile.component";
import {AddItemComponent} from "./main/item/add-item/add-item.component";
import {ListItemComponent} from "./main/item/list-item/list-item.component";
import {CheckItemComponent} from "./main/item/check-item/check-item.component";
import {StolenItemComponent} from "./main/item/stolen-item/stolen-item.component";

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent, children: [
            { path: 'map', component: MapComponent},
            { path: 'profile', component: ProfileComponent},
            { path: 'add-item', component: AddItemComponent },
            { path: 'list-item', component: ListItemComponent },
            { path: 'stolen-item', component: StolenItemComponent },
            { path: 'check-item', component: CheckItemComponent },
        ] },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }