import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumContentProjectionBasedRoutingModule } from './album-content-projection-based-routing.module';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { AlbumWrapperComponent } from './components/album-wrapper/album-wrapper.component';
import {UiModule} from '../ui/ui.module';


@NgModule({
  declarations: [AlbumPageComponent, AlbumWrapperComponent],
  imports: [
    CommonModule,
    AlbumContentProjectionBasedRoutingModule,
    UiModule
  ]
})
export class AlbumContentProjectionBasedModule { }
