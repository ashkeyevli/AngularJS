import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProviderService} from '../../../provider.service';
import {IAlbum, IPhoto} from '../../../model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  isLinear = false;
  @Input() user: string;
  @Input()  albums: IAlbum[] = [];
  photos: IPhoto[] = [];
  // @Output() albumSelected = new EventEmitter<string>();
  constructor(private route: ActivatedRoute, private providerService: ProviderService) { }

  ngOnInit(): void {
  //   this.route.paramMap.subscribe(async (paramMap) =>
  //   {
  //     this.user = paramMap.get('userId');
  //   });
  //   this.messages = await this.providerService.getAlbums()

  }
  // navigateToPhotos(albumid: number): void {
  //   this.albumSelected.emit(String(albumid));
  // }


  getPhotos(albumId: number): void {
    this.providerService.getPhotos(String(albumId)).subscribe(photos => {
      this.photos = photos;
    } );
  }

}
