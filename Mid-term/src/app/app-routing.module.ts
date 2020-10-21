import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ViewPostsComponent} from './Pages/Posts/view-posts/view-posts.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {CommentsComponent} from './Pages/Comments/comments/comments.component';
import {AlbumComponent} from './ui/components/album/album.component';
import {NotFoundComponent} from './Pages/not-found/not-found.component';
import {UserPageComponent} from './Pages/user-page/user-page.component';
// import {AlbumRouteBasedModule} from './album-route-based/album-route-based.module';

const routes: Routes = [
  {path: 'signUp', component: SignUpComponent},
  {path: 'posts', component: ViewPostsComponent},
  {path: 'posts/:id/comments', component: CommentsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'album-route', loadChildren: async () => {
      const module = await import('./album-route-based/album-route-based.module');
      return module.AlbumRouteBasedModule;
    },
  },
  {path: 'user-page', component: UserPageComponent},
  {path: 'album-content-projection-based', loadChildren: async() => {
    const module = await import('./album-content-projection-based/album-content-projection-based.module');
    return module.AlbumContentProjectionBasedModule;
    },
  },
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
