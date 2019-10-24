import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './inicio/app.component';
//servicios
import { LoginService } from './services/login.service';
import { UploadService } from './services/upload.service';
import { PublishtextComponent } from './publishtext/publishtext.component';
import { RegisteruserService } from './services/registeruser.service';
//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material';
//conexion a internet
import { HttpClientModule } from '@angular/common/http';
//routing
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PublishvideoComponent } from './publishvideo/publishvideo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublishbannerComponent } from './publishbanner/publishbanner.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { HomeComponent } from './home/home.component';
//guardado validacion de inicio de sesion para navegar entre pantallas
import { AuthGuard } from './authGuard.injectable';

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
    RegisteruserService,
    AuthGuard,
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
