import {Component, OnInit, ViewChild} from '@angular/core';
import {ToastService} from '../../ui/services/toast/toast.service';

@Component({
  templateUrl: './toasts-page.component.html',
  styleUrls: ['./toasts-page.component.scss']
})
export class ToastsPageComponent implements OnInit {
  color1: string;
  title: string;
  content: string;
  showTitle: true;
  duration: string;
  hasCloseButton: true;
  colors: string[] = ['isSuccess', 'isFailed'];
  xpositions: string[] = ['left', 'right', 'center'];
  ypositions: string[] = ['top', 'bottom', 'center'];
  horizontalOrientation: string;
  verticalOrientation: string;
  constructor(
    private _toast: ToastService,

  ) { }

  ngOnInit(): void {
    this.showTitle = true;
    this.hasCloseButton = true;
    this.color1 = 'isSuccess';
    this.duration = '24';
  }

  formatLabel(value: string) {
    if ( parseInt(value) <= 0) {
      return '10000000';
    }

    return value;
  }
  public async showToast() {
    console.log('Alert shown');
    await this._toast.toastShow({
      title: this.title,
      content: this.content,
      type: this.color1,
      showTitle: this.showTitle,
      hasCloseButton: this.hasCloseButton,
      duration: this.formatLabel(this.duration),
      xPosition: this.horizontalOrientation,
      yPosition: this.verticalOrientation
    });

  }
}
