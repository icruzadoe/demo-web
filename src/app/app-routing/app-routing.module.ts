import { HomeComponent } from './../home/home.component';
import { RegisteruserComponent } from './../registeruser/registeruser.component';
import { LoginComponent } from './../login/login.component';
import { PublishbannerComponent } from './../publishbanner/publishbanner.component';
import { PublishtextComponent } from './../publishtext/publishtext.component';
import { PublishvideoComponent } from './../publishvideo/publishvideo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from '../inicio/app.component';
import { AuthGuard } from '../authGuard.injectable';

const routes: Routes = [
  {path: 'publishvideo', component: PublishvideoComponent},
  {path: 'publishtext', component: PublishtextComponent},
  {path: 'publishbanner', component: PublishbannerComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registeruser', component: RegisteruserComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: LoginComponent,  pathMatch: 'full'},
  {path: '**', component: LoginComponent,  pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
