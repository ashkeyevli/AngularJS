import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal} from '@angular/cdk/portal';
import {ToastComponent} from '../../components/toast/toast.component';
import {IToastConfig} from './toast.configations';
import {TOAST_CONFIG} from '../dialog.tokens';


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private _overlay: Overlay) {}
  lastOverlay: OverlayRef;
  counter = 0;
  public async toastShow(
    config: IToastConfig = { title: 'Title in service', content: 'Toast content in service', type: 'isSuccess',
      showTitle: true, hasCloseButton: true, duration: '10', xPosition: 'right', yPosition: 'top'}
  ): Promise<void> {

    return new Promise<any>((resolve, reject) => {

      const overlay = this._overlay.create({
        positionStrategy: this.getPositionStrategy(config)
      });
      this.lastOverlay = overlay;
      this.counter++;

      const injector = this._createInjector(overlay, {
        ...config,
        close: resolve,
      });
      const portal = new ComponentPortal(ToastComponent, null, injector);
      overlay.attach(portal);
    });
  }

  private _createInjector(
    ref: OverlayRef,
    config: IToastConfig
  ) {
    const injector = Injector.create({
      providers: [
        { provide: OverlayRef, useValue: ref },
        { provide: TOAST_CONFIG, useValue: config },
      ],
    });
    return injector;
  }

  // private _createOverlay(config: OverlayConfig = {}): OverlayRef {
  //   const defaultConfig = {
  //     positionStrategy: this.getPositionStrategy()
  //   } as OverlayConfig;
  //   return this._overlay.create({ ...defaultConfig, ...config });
  //
  // }

  getPositionStrategy(toast: IToastConfig) {
    if (toast.xPosition === 'left' && toast.yPosition === 'top'){
    return this._overlay
      .position()
      .global()
      .top(this.getPositionTop())
      .left();
    }
    else if (toast.xPosition === 'right' && toast.yPosition === 'top') {
      return this._overlay
      .position()
      .global()
      .top(this.getPositionTop())
      .right();
    }
    else if (toast.xPosition === 'center' && toast.yPosition === 'top') {
      return this._overlay
        .position()
        .global()
        .top(this.getPositionTop())
        .centerHorizontally();
    }

    else if (toast.xPosition === 'left' && toast.yPosition === 'center'){
      return this._overlay
        .position()
        .global()
        .centerVertically(this.getPositionTop())
        .left();
    }
    else if (toast.xPosition === 'right' && toast.yPosition === 'center') {
      return this._overlay
        .position()
        .global()
        .centerVertically(this.getPositionTop())
        .right();
    }
    else if (toast.xPosition === 'center' && toast.yPosition === 'center') {
      return this._overlay
        .position()
        .global()
        .centerVertically(this.getPositionTop())
        .centerHorizontally();
    }
    else if (toast.xPosition === 'left' && toast.yPosition === 'bottom'){
      return this._overlay
        .position()
        .global()
        .bottom(this.getPositionBottom())
        .left();
    }
    else if (toast.xPosition === 'right' && toast.yPosition === 'bottom') {
      return this._overlay
        .position()
        .global()
        .bottom(this.getPositionBottom())
        .right();
    }
    else if (toast.xPosition === 'center' && toast.yPosition === 'bottom') {
      return this._overlay
        .position()
        .global()
        .bottom(this.getPositionBottom())
        .centerHorizontally();
    }

  }
  getPositionTop () {
    if (this.lastOverlay && this.lastOverlay.overlayElement) {
      return this.lastOverlay.overlayElement.getBoundingClientRect().bottom + 'px';
    }
  }

  getPositionBottom () {
    if (this.lastOverlay && this.lastOverlay.overlayElement) {
      return this.lastOverlay.overlayElement.getBoundingClientRect().height * this.counter + 'px';
    }
  }

}








