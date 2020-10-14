import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  templateUrl: './router-based-album.component.html',
  styleUrls: ['./router-based-album.component.scss']
})
export class RouterBasedAlbumComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  userSelectedHandler(user) {

    this.router.navigate([user], { relativeTo: this.route });
  }

}
