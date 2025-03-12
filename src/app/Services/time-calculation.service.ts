import {Injectable} from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class TimeCalculationService {

  calculateTime(request: TimeCalculationRequest): TimeCalculationResponse {
    const times: string [] = request.swipeDetails.match(/\d{2}:\d{2}:\d{2}\s[a|p]m/g) || [];

    if (times.length % 2 === 1) {
      times.push(moment().format('hh:mm:ss a'));
    }

    let workingHours = 0;
    let breakHours = 0;

    for (let i = 0; i < times.length - 1; i++) {
      const startTime = moment(times[i], 'hh:mm:ss a');
      const endTime = moment(times[i + 1], 'hh:mm:ss a');
      const duration = moment.duration(endTime.diff(startTime)).asHours();
      i % 2 === 0 ? (workingHours += duration) : (breakHours += duration);
    }

    return {
      workingHours: this.formatHours(workingHours),
      breakHours: this.formatHours(breakHours),
      officeHours: this.formatHours(workingHours + breakHours)
    };
  }

  private formatHours(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h} hours, ${m} minutes`;
  }
}


export interface TimeCalculationRequest {
  swipeDetails: string;
}

export interface TimeCalculationResponse {
  workingHours: string;
  breakHours: string;
  officeHours: string;
}
