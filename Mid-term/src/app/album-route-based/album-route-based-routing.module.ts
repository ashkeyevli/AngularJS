import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterBasedAlbumComponent} from './pages/router-based-album/router-based-album.component';
import {SelectContactComponent} from '../ui/components/select-contact/select-contact.component';
import {AlbumComponent} from '../ui/components/album/album.component';
import {AlbumPageComponent} from './pages/album-page/album-page.component';

const albumRoutes: Routes = [
  {
    path: '',
    component: SelectContactComponent,
  },
  {
    path: ':userId',
    component: AlbumPageComponent

  }
];
const routes: Routes = [
  {
    path: '',
    redirectTo: 'albums',
    pathMatch: 'full'
  },
  {path: 'albums',
    component: RouterBasedAlbumComponent,
    children: albumRoutes
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRouteBasedRoutingModule { }
