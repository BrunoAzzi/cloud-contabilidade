import { NgModule } from '@angular/core';
import { MdButtonModule, MdToolbarModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  imports: [
    MdToolbarModule,
    MdButtonModule,
    FlexLayoutModule,
  ],
  exports: [
    MdToolbarModule,
    MdButtonModule,
    FlexLayoutModule,
  ]
})
export class MaterialModule { }
