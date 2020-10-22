import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service';
import {IAlbum, IPhoto} from '../model';

@Component({
  selector: 'app-uploadphoto',
  templateUrl: './uploadphoto.component.html',
  styleUrls: ['./uploadphoto.component.scss']
})
export class UploadphotoComponent implements OnInit {
photo: IPhoto[] = [];
albums: IAlbum[] = [];
userId: string;
selectedAlbum;
url: string;
title: string;
thumbnailUrl: string;
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');

    this.providerService.getAlbums( this.userId)
      .subscribe(res => {
        this.albums = res;
      });
  }
  uploadPhoto(){
    this.providerService.postPhoto( this.selectedAlbum, this.title, this.url, this.thumbnailUrl)
      .subscribe(res => {
        this.photo.push(res);
        alert('You uploaded new photo!');
      });
  }

}
