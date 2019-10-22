import { FormControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatRadioModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatRadioModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
    ],
})

export class MaterialModule { }