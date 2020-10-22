import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAlbum, IAuth, IComments, IPhoto, IPosts, IUser} from './model';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {
  BASE_URL = 'http://127.0.0.1:3000';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  login(username, password): Observable<IAuth> {
    const url = this.BASE_URL;

    return this.http.post<IAuth>('http://127.0.0.1:3000/sign-in', {
      username,
      password
    });
  }

  postUser(login: any, pass: any, sname: any, nEmail: any,
           sphone: any,
           swebsite: any,
           sstreet: any,
           ssuite: any,
           scity: any,
           szipcode: any,
           slat: any,
           slng: any,
           scompanyName: any,
           scathPhrase: any,
           sbs: any): Observable<IUser> {
    const url = this.BASE_URL;

    return this.http.post<IUser>('http://127.0.0.1:3000/users', {
      username: login,
      password: pass,
      name: sname,
      email: nEmail,
      phone: sphone,
    website: swebsite,
      address: {
        street: sstreet,
        suite: ssuite,
        city: ssuite,
        zipcode: szipcode},
      geo: {
        lat: slat,
        lng: slng},
      company: {
    companyName: scompanyName,
      cathPhrase: scathPhrase,
    bs: sbs   }, }, this.httpOptions);
  }

  getPosts(): Observable<IPosts[]> {
    const url = this.BASE_URL;
    return this.http.get<IPosts[]>(url + '/posts');
  }
  filterPosts(selectedUser: any): Observable<IPosts[]> {
    console.log(selectedUser);
    return this.http.get<IPosts[]>('http://127.0.0.1:3000/posts?userId=' + selectedUser);
  }

  getUser(userId: any): Observable<IUser> {
    const url = this.BASE_URL;
    return this.http.get<IUser>('http://127.0.0.1:3000/users/' + userId);
  }
  postPost(stitle: any, sbody: any, suserId: string): Observable<IPosts>{
      console.log(stitle);
      return this.http.post<IPosts>('http://127.0.0.1:3000/posts', {
        userId: suserId,
        title: stitle,
        body: sbody}, this.httpOptions);
  }

  getComments(postId: any): Observable<IComments[]> {
    const url = this.BASE_URL;
    return this.http.get<IComments[]>('http://127.0.0.1:3000/posts/' + postId + '/comments');
  }

  postComment(sname: any, sbody: any, semail: any, spostId: any): Observable<IComments>{
    return this.http.post<IComments>('http://127.0.0.1:3000/posts/' + spostId + '/comments', {
      postId: spostId,
      name: sname,
      email: semail,
      body: sbody}, this.httpOptions);
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://127.0.0.1:3000/users');
  }

  getAlbums(userdId: any): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>('http://127.0.0.1:3000/users/' + userdId + '/albums');
  }

  getPhotos(albumId: any): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>('http://127.0.0.1:3000/albums/' + albumId + '/photos');
  }

  postAlbum(suserId: any, stitle: string): Observable<IAlbum>{
    console.log(suserId, stitle);
    return this.http.post<IAlbum>('http://127.0.0.1:3000/albums/', {
      userId: suserId,
      title: stitle}, this.httpOptions);
  }
  postPhoto(salbumId: any, stitle: string, surl: string, sthumbanilUrl: string): Observable<IPhoto>{
    return this.http.post<IPhoto>('http://127.0.0.1:3000/albums/' + salbumId + '/photos', {
      albumId: salbumId,
      title: stitle,
    url: surl,
    thumbnailUrl: sthumbanilUrl}, this.httpOptions);
  }
}
