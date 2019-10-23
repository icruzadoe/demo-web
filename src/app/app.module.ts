import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './inicio/app.component';
//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';
//routing
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PublishvideoComponent } from './publishvideo/publishvideo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublishtextComponent } from './publishtext/publishtext.component';
import { PublishbannerComponent } from './publishbanner/publishbanner.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PublishvideoComponent,
    NavbarComponent,
    PublishtextComponent,
    PublishbannerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
