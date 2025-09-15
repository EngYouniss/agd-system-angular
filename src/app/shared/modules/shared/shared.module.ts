import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const modules=[
  CommonModule,
  FormsModule
]

@NgModule({
  declarations:[],
imports:[...modules],
  exports:[
    ...modules
  ],
})
export class SharedModule { }
