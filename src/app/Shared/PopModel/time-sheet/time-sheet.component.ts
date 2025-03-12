import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {TimeCalculationResponse} from "../../../Services/time-calculation.service";
import html2canvas from "html2canvas";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss']
})
export class TimeSheetComponent {
  @ViewChild('screenshotElement', {static: true}) screenshotElement!: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<TimeSheetComponent>,
    @Inject(MAT_DIALOG_DATA) public timeResult: TimeCalculationResponse
  ) {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  takeScreenshot() {
    if (!this.screenshotElement) return;

    html2canvas(this.screenshotElement.nativeElement).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'timesheet.png';
      link.click();
    });
  }
}
