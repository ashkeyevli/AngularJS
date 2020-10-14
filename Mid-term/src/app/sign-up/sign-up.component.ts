import { Component, OnInit } from '@angular/core';
import {IUser} from '../model';
import {Router} from '@angular/router';
import {ProviderService} from '../provider.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: IUser[] = [];
  public login = '';
  public password = '';
  public confirm = '';
  public name = '';
  public email = '';
  public  phone = '';
  public  website = '';
  public street = '';
  public suite = '';
  public city = '';
  public zipcode = '';
  public lat = '';
  public lng = '';
  public companyName = '';
  public cathPhrase = '';
  public bs = '';

  constructor(private provider: ProviderService, private router: Router) { }

  ngOnInit(): void {  }
  clear() {
    this.login = '';
    this.password = '';
    this.confirm = '';
    this.name = '';
    this.email = '';
    this.phone = '';
    this.website = '';
    this.street = '';
    this.suite = '';
    this.city = '';
    this.zipcode = '';
    this.lat = '';
    this.lng = '';
    this.companyName = '';
    this.cathPhrase = '';
    this.bs = '';
  }
  signup() {
    if (!this.login || !this.password || !this.confirm) {
      alert('Please, fill all lines!');
      this.clear();
    } else if (this.password !== this.confirm) {
      alert('Passwords do not match. Check it, please!');
    }
    this.provider.postUser(this.login, this.password, this.name, this.email, this.phone,
    this.website,
    this.street,
    this.suite,
    this.city,
    this.zipcode,
    this.lat,
    this.lng,
    this.companyName,
    this.cathPhrase,
    this.bs).subscribe(res => {
      this.user.push(res);
      console.log(this.login, this.password, this.name, this.email);
      localStorage.setItem('name', res.username);
      // localStorage.setItem('users', JSON.stringify(this.user));
      this.clear();
      this.router.navigate(['/login']);
      alert('You were successfully signed up. Now, please, log in');
    });
  }

}
