import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../../provider.service';
import {ActivatedRoute} from '@angular/router';
import {IAlbum} from '../../../model';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {
  albums: IAlbum[] = [];
  userId: string;


  constructor(private providerService: ProviderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async (paramMap) =>
    {
      this.userId = paramMap.get('userId');
      this.getAlbums(this.userId);
    });
  }
  getAlbums(userId: string): void {
    this.providerService.getAlbums(userId).subscribe(albums => {
      this.albums = albums;
      console.log(this.albums);
    } );
  }

}
