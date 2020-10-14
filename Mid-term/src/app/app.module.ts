import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProviderService} from './provider.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './AuthInterceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewPostsComponent } from './Pages/Posts/view-posts/view-posts.component';
import { CreatePostsComponent } from './Pages/Posts/create-posts/create-posts.component';
import { CommentsComponent } from './Pages/Comments/comments/comments.component';
import { CreateCommentsComponent } from './Pages/Comments/create-comments/create-comments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './ui/components/user-list/user-list.component';
import {UiModule} from './ui/ui.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { SelectContactComponent } from './ui/components/select-contact/select-contact.component';
import { AlbumPageComponent } from './album-route-based/pages/album-page/album-page.component';
import { PhotosComponent } from './ui/components/photos/photos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ViewPostsComponent,
    CreatePostsComponent,
    CommentsComponent,
    CreateCommentsComponent,
    NotFoundComponent,
    SelectContactComponent,
    AlbumPageComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    UiModule
  ],
  providers: [
    ProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
