import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../../provider.service';
import {IPosts, IUser} from '../../../model';
@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss']
})
export class CreatePostsComponent implements OnInit {
  public title = '';
  public body = '';
  post: IPosts[] = [];
  userId: string;
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
  }
  postPost(title = this.title, body = this.body): void {
    this.userId = localStorage.getItem('userId');
    this.providerService.postPost(title, body, this.userId)
      .subscribe(res => {
        this.post.push(res);
        alert('You posted!');
      });
  }
}
