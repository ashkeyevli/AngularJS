import { Component, OnInit } from '@angular/core';
import {IComments, IPosts, IUser} from '../../../model';
import {ProviderService} from '../../../provider.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: IComments[] = [];
  public  postId = +this.route.snapshot.paramMap.get('id');

  constructor(private providerService: ProviderService,
              private route: ActivatedRoute) { }

  getComments(): void {
    this.providerService.getComments(this.postId).subscribe(comments => {
      this.comments = comments;
    } );
  }

  ngOnInit(): void {
    this.getComments();
  }

}
