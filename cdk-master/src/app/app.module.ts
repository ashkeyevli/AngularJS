import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { DialogPageComponent } from './pages/dialog-page/dialog-page.component';
import { ToastsPageComponent } from './pages/toasts-page/toasts-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import {FormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    DialogPageComponent,
    ToastsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
