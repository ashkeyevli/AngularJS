import {Component, Inject, OnInit} from '@angular/core';
import {OverlayRef} from '@angular/cdk/overlay';
import {DIALOG_CONFIG, TOAST_CONFIG} from '../../services/dialog.tokens';
import {IAlertConfig} from '../../services/dialog.configurations';
import {IToastConfig} from '../../services/toast/toast.configations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  title: string;
  content: string;
  type: string;
  showTitle: boolean;
  hasCloseButton: boolean;
  duration: string;
  xPosition: string;
  yPosition: string;
  timer: number;
  timeleft: number;
  selectedColor: string;
  intervalId: number;
  animationState = 'default';


  constructor(
    private _overlayRef: OverlayRef,
    @Inject(TOAST_CONFIG) private _config: IToastConfig
  ) {
    this.title = _config.title;
    this.content = _config.content;
    this.type = _config.type;
    this.showTitle = _config.showTitle;
    this.hasCloseButton = _config.hasCloseButton;
    this.duration = _config.duration;
    this.xPosition = _config.xPosition;
    this.yPosition = _config.yPosition;
  }

  ngOnInit(): void {
    // setTimeout(() => {this.close(); } , parseFloat(this.duration) * 1000);
    this.timeleft = parseFloat(this.duration);
    setInterval(() => {
      if (this.timeleft > 0){
        this.timeleft--;
        console.log(this.timeleft);
      } else
        {
          this.close();
        }
      }, 1300);
  }

  close() {
    this._overlayRef.dispose();
    this._config.close();
  }

}
