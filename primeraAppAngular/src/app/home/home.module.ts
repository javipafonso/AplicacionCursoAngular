import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GreetingRefComponent } from './greeting-ref/greeting-ref.component';
import { GreetingRxComponent } from './greeting-rx/greeting-rx.component';



@NgModule({
  declarations: [HomeComponent, GreetingComponent, GreetingRefComponent, GreetingRxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
