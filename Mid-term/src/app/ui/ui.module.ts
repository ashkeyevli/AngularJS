import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from './components/user-list/user-list.component';
import { AlbumComponent } from './components/album/album.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PhotosComponent} from './components/photos/photos.component';



@NgModule({
  declarations: [UserListComponent, AlbumComponent],
  exports: [UserListComponent, AlbumComponent],
  imports: [
    CommonModule, CustomMaterialModule, ReactiveFormsModule,
  ]
})
export class UiModule { }
