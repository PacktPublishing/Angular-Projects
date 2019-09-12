import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'snaps' },
  { path: 'snaps', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'snaps/:id', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
