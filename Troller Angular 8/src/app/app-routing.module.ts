import { ProfileComponent } from './profile/profile.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'login',
    component:HomeComponent
  },
  {
    path:'profiles',
    component:AfterLoginComponent
  },
  {
    path:'myProfile',
    component:ProfileComponent
  },
  {path: 'not-found',component:HomeComponent},
  {path: '**', redirectTo:'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
