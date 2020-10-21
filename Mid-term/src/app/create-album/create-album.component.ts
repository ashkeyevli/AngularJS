import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service';
import {IAlbum} from '../model';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {
public title = '';
public userId: string;
albums: IAlbum[] = [];
  constructor(private providerService: ProviderService) {
  }

  ngOnInit(): void {
  }
  createAlbum(): void {
    this.userId = localStorage.getItem('userId');

    this.providerService.postAlbum( this.userId, this.title)
      .subscribe(res => {
        console.log(res);
        this.albums.push(res);
        alert('You created album!');
      });
    location.reload();
  }
}
