import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUser} from '../../../model';
import {ProviderService} from '../../../provider.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 users: IUser[] = [];
 @Output() userSelected = new EventEmitter<string>();

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.getUsers().subscribe(user => {
    this.users = user;
    } );
  }

  navigateToAlbum(userId: number): void {
    this.userSelected.emit(String(userId));
  }

}
