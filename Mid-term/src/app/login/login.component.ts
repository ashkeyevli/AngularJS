import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login = '';
  public password = '';
  logged = false;


  constructor(private provider: ProviderService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      // window.location.replace('http://localhost:300');
    }
  }

  clear() {
    this.login = '';
    this.password = '';
  }

  auth() {
    if (!this.login || !this.password) {
      alert('Please, fill all lines');
      this.clear();
    } else if (this.login && this.password) {
      this.provider.login(this.login, this.password).subscribe(res => {
        console.log(this.login, this.password);
        localStorage.setItem('accessToken', res.access_token);
        localStorage.setItem('userId', String(res.userId));
        window.location.replace('http://localhost:4200/user-page');
        localStorage.setItem('name', this.login);
        this.logged = true;
        this.clear();
        alert('You logged in successfully!');
      });
    } else {
      alert('Wrong login or password! Try again!');
    }
  }

}
