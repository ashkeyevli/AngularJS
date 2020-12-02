import {Component, EventEmitter, HostBinding, HostListener, Inject, OnInit, Output} from '@angular/core';
import {OverlayRef} from '@angular/cdk/overlay';
import {DIALOG_CONFIG, TOAST_CONFIG} from '../../services/dialog.tokens';
import {IAlertConfig} from '../../services/dialog.configurations';
import {IToastConfig} from '../../services/toast/toast.configations';
import {TOAST_ANIMATION_TRIGGER} from './toast.animation';
import {animate, AnimationEvent, style, transition, trigger} from '@angular/animations';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    TOAST_ANIMATION_TRIGGER
    // trigger('animation', [
    //   transition('void => default', [style({   height: 0, overflow: 'hidden'}), animate(1000, style({ height: '*' }))]),
    //   transition('* => leaving', animate(1000, style({ height: '0', overflow: 'hidden',   })))])

  ],
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
 @Output()
 remove = new EventEmitter();

  @HostBinding('@animation')
  state: 'default' | 'leaving' = 'default';

  ngOnInit(): void {
    // setTimeout(() => {this.close(); } , parseFloat(this.duration) * 1000);
    this.timeleft = parseFloat(this.duration);
    setInterval(() => {
      if (this.timeleft > 0){
        this.timeleft--;
        console.log(this.timeleft);
      } else
        {
          this.removeHandler();
        }
      }, 1300);
  }

  removeHandler(){
    this.state = 'leaving';
  }

  @HostListener('@animation.start', ['$event'])
  @HostListener('@animation.done', ['$event'])
  logAnimationEvents(event: AnimationEvent): void{
    if (event.toState === 'leaving' && event.phaseName === 'done'){
      this._config.close();
      this._overlayRef.dispose();

    }
  }


}
