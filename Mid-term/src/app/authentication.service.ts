import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _isAuthenticated: boolean;
  public get isAuthenticated(): boolean{
    return this._isAuthenticated;
  }
  public set isAuthenticated(v: boolean){
     this._isAuthenticated = v;
  }

  login(){
    this._isAuthenticated = true;
  }
  logout(){
    this._isAuthenticated = false;
    localStorage.clear();
    window.location.reload();
  }
  constructor() { }
}
