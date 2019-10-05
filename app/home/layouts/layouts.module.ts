import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TopbarMainComponent } from './topbar-main/topbar-main.component';

@NgModule({
  declarations: [TopbarMainComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutsModule { }
