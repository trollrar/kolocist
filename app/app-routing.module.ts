import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import {MapComponent} from "./main/map/map.component";
import {ProfileComponent} from "./main/profile/profile.component";
import {AddItemComponent} from "./main/add-item/add-item.component";

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent, children: [
            { path: 'map', component: MapComponent},
            { path: 'profile', component: ProfileComponent},
            { path: 'add-item', component: AddItemComponent }
        ] },

];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }