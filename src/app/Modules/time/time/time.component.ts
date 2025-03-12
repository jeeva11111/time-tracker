import {Component} from '@angular/core';
import {TimeSheetComponent} from "../../../Shared/PopModel/time-sheet/time-sheet.component";

import {
  TimeCalculationRequest,
  TimeCalculationResponse,
  TimeCalculationService
} from "../../../Services/time-calculation.service";
import * as moment from "moment";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {

  count: number = 0;
  timeResult: TimeCalculationResponse | null = null;
  currentTime: string = '';
  private intervalId: any;
  swipeDetails: string = 'Enter your Greyt HR Text!...';

  constructor(
    private timeCalculationService: TimeCalculationService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);

    if (sessionStorage.getItem("time-sheet")) {
      this.swipeDetails = sessionStorage.getItem("time-sheet") == null ? "" : this.swipeDetails;
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateTime() {
    this.currentTime = moment().format('hh:mm:ss A');
  }

  calculateTime() {
    const request: TimeCalculationRequest = {swipeDetails: this.swipeDetails};
    this.timeResult = this.timeCalculationService.calculateTime(request);
    sessionStorage.setItem("time-sheet", JSON.stringify(this.timeResult));
  }

  checkTextLength(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    if (textarea.value.length > 20) {
      this.calculateTime();
      setTimeout(() => {
        if (this.count < 3) {
          this.showModal();
          this.count++;
          setTimeout(() => {
            this.count = 0;
          }, 3000);
        }
      }, 4500);
    }
  }

  showModal(): void {
    if (!this.timeResult) return;

    this.dialog.open(TimeSheetComponent, {
      width: '400px',
      data: this.timeResult // Pass `timeResult` properly
    });
  }
}


