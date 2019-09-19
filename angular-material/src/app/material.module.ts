// este Modulo sera el encargado de importar todos los componentes de Angular Material
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule

} from '@angular/material';



@NgModule({
  declarations: [],

  imports: [
   MatButtonModule,
   MatCardModule,
   MatToolbarModule,
   MatInputModule,
   MatSelectModule
  ],

  exports: [
MatButtonModule,
MatCardModule,
MatToolbarModule,
MatInputModule,
MatSelectModule

  ]
})
export class MaterialModule { }
