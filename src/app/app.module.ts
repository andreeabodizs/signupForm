import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheFormComponent } from './the-form/the-form.component';


@NgModule({
  declarations: [AppComponent, TheFormComponent],
  imports: [AppRoutingModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
