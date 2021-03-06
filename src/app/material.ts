import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,MatToolbarModule,MatIconModule,MatMenuModule,MatSidenavModule,
        MatRadioModule
        
    ],
    exports: [
        MatButtonModule,MatToolbarModule,MatIconModule,MatMenuModule,MatSidenavModule,
        MatRadioModule
    ],
})

export class MaterialModule { }