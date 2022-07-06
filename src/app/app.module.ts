import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheFormComponent } from './the-form/the-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, TheFormComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, MatFormFieldModule, ReactiveFormsModule, CommonModule] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
