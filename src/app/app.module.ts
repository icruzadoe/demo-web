import { ManageAgencyComponent } from './manageagency/manageagency.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './inicio/app.component';
//servicios
import { LoginService } from './services/login.service';
import { UploadService } from './services/upload.service';
import { PublishtextComponent } from './publishtext/publishtext.component';
import { UserService } from './services/user.service';
//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';
//conexion a internet
import { HttpClientModule } from '@angular/common/http';
//routing

import { PublishvideoComponent } from './publishvideo/publishvideo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublishbannerComponent } from './publishbanner/publishbanner.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { HomeComponent } from './home/home.component';
//guardado validacion de inicio de sesion para navegar entre pantallas
import { AuthGuard } from './authGuard.injectable';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { AddagencyComponent } from './addagency/addagency.component';
import { ActivityregisterComponent } from './activityregister/activityregister.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { PublishaudioComponent } from './publishaudio/publishaudio.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AppRoutingModule } from './services/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PublishvideoComponent,
    NavbarComponent,
    PublishtextComponent,
    PublishbannerComponent,
    LoginComponent,
    RegisteruserComponent,
    HomeComponent,
    ManageuserComponent,
    ManageAgencyComponent,
    AddagencyComponent,
    ActivityregisterComponent,
    MultimediaComponent,
    PublishaudioComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    LoginService, 
    UploadService,
    UserService,
    AuthGuard,
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
