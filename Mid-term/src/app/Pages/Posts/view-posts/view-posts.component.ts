import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../../provider.service';
import {IPosts, IUser} from '../../../model';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit {
  posts: IPosts[] = [];
  userId = localStorage.getItem('userId');
  user: IUser;
  users: IUser[] = [];
  selectedUser: string;


  constructor(private providerService: ProviderService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'comments',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/comment-black-18dp.svg'));
  }

  getPosts(): void {
    this.providerService.getPosts().subscribe(posts => {
      this.posts = posts;
    } );
  }


  getFilteredPosts(user): void {
    console.log(user);
    if (user !== '') {
      this.providerService.filterPosts(user).subscribe(posts => {
        this.posts = posts;
      });
    }
    else {
      this.getPosts();
    }
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
    this.getUsers();
  }
  getUsers(): void{
    this.providerService.getUsers().subscribe(user => {
      this.users = user;
    } );
  }

}
