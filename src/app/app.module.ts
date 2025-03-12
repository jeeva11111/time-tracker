import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './Shared/header/header.component';
import {NotfoundComponent} from './Shared/notfound/notfound.component';
import {ProfileModule} from "./Modules/profile/profile.module";
import {SettingsModule} from "./Modules/settings/settings.module";
import {TimeModule} from "./Modules/time/time.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    SettingsModule,
    TimeModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
