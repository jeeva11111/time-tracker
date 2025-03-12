import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimeRoutingModule} from './time-routing.module';
import {TimeComponent} from "./time/time.component";
import {TimeSheetComponent} from "../../Shared/PopModel/time-sheet/time-sheet.component";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    TimeComponent,
    TimeSheetComponent
  ],
  imports: [
    CommonModule,
    TimeRoutingModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,


  ]
})
export class TimeModule {
}
