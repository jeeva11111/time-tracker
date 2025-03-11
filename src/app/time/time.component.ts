import {Component, ViewChild} from '@angular/core';
import {TimeSheetComponent} from "../time-sheet/time-sheet.component";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {
  count: number = 0;
  @ViewChild(TimeSheetComponent) modalComponent!: TimeSheetComponent;

  checkTextLength(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    if (textarea.value.length > 20) {
      setTimeout(() => {
        if (this.count < 3) {
          this.modalComponent.toggleModal(); // Show the modal
          this.count++;
          setTimeout(() => {
            this.count = 0;
          }, 3000);
        }
      }, 4500);
    }
  }
}
