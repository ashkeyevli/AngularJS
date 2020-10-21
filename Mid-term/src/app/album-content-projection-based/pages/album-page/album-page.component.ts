import { Component, OnInit } from '@angular/core';
import {IAlbum} from '../../../model';
import {ProviderService} from '../../../provider.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {
userId: string;
albums: IAlbum[] = [];

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
  }
userSelectedHandler(userId){
  this.providerService.getAlbums(userId).subscribe(albums => {
    this.albums = albums;
  } );
}
}
