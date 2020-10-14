import { Component, OnInit } from '@angular/core';
import {IComments, IPosts} from '../../../model';
import {ProviderService} from '../../../provider.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.scss']
})
export class CreateCommentsComponent implements OnInit {
  public name = '';
  public body = '';
  comment: IComments[] = [];
  userEmail = localStorage.getItem('email');
  public  postId = +this.route.snapshot.paramMap.get('id');


  constructor(private providerService: ProviderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  postComment(): void {
    this.providerService.postComment(this.name, this.body, this.userEmail, this.postId)
      .subscribe(res => {
        this.comment.push(res);
        alert('You commented!');
      });
  }
}
