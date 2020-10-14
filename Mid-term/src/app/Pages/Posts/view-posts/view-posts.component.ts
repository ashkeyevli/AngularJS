import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../../provider.service';
import {IPosts, IUser} from '../../../model';


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit {
  posts: IPosts[] = [];
  userId = localStorage.getItem('userId');
  user: IUser;

  constructor(private providerService: ProviderService) { }

  getPosts(): void {
    this.providerService.getPosts().subscribe(posts => {
      this.posts = posts;
    } );
  }
  // public async ngOnInit(): Promise<void> {
  //   await this.getPosts();
  //
  // }


  ngOnInit(): void {
    this.getPosts();
    this.providerService.getUser(this.userId).subscribe(user => {
      localStorage.setItem('email', user.email);
    } );
  }

}
