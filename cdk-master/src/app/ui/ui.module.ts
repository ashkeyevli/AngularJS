import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { ToastComponent } from './components/toast/toast.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {FormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PageLayoutComponent, AlertComponent, ConfirmComponent, PromptComponent, TooltipComponent, TooltipDirective, ToastComponent],
  imports: [CommonModule, RouterModule, OverlayModule, CustomMaterialModule, FormsModule, MatProgressBarModule, BrowserAnimationsModule],
    exports: [PageLayoutComponent, TooltipDirective],
})
export class UiModule {}
