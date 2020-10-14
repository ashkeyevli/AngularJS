import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../../provider.service';
import {IPhoto} from '../../../model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: IPhoto[] = [];
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
  }


}
