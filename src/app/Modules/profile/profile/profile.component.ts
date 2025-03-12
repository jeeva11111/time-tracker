import {Component} from '@angular/core';
import {TimeCalculationResponse} from "../../../Services/time-calculation.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  timeResult: TimeCalculationResponse | null = null;

  constructor() {
    if (this.timeResult) {
      sessionStorage.setItem("time-sheet", JSON.stringify(this.timeResult));
    }
    this.loadTimeSheet();

  }

  loadTimeSheet(): void {
    const timeStore = sessionStorage.getItem("time-sheet");
    if (timeStore) {
      this.timeResult = JSON.parse(timeStore) as TimeCalculationResponse;
    }
    console.log(this.timeResult);
  }
}
