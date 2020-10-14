import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRouteBasedRoutingModule } from './album-route-based-routing.module';
import {UiModule} from '../ui/ui.module';
import {RouterBasedAlbumComponent} from './pages/router-based-album/router-based-album.component';


@NgModule({
  declarations: [RouterBasedAlbumComponent],
  imports: [
    CommonModule,
    AlbumRouteBasedRoutingModule, UiModule
  ]
})
export class AlbumRouteBasedModule { }
