import { NgModule } from '@angular/core';
import { NavbarModule, WavesModule, ButtonsModule, CardsModule, IconsModule, InputsModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
const mdbModule = [
  NavbarModule,
  WavesModule,
  ButtonsModule,
  BrowserAnimationsModule,
  CardsModule,
  IconsModule,
  FormsModule,
  CardsModule,
  BrowserModule,
  InputsModule,
  IconsModule,

]

@NgModule({

  imports: [
    mdbModule
  ],
  exports: [
    mdbModule
  ]
})
export class PharmacyModuleModule { }
