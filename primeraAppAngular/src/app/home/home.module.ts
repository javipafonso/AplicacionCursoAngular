import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { FormsModule } from '@angular/forms';
import { GreetingRefComponent } from './greeting-ref/greeting-ref.component';



@NgModule({
  declarations: [HomeComponent, GreetingComponent, GreetingRefComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
