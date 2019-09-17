import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1hEw7OkpxLjGbndL6KxHp0uFzx3VrUcw'
    })
  ], 
  exports: [
    FormsModule,
    AgmCoreModule
  ]
})
export class SharedModule { }
