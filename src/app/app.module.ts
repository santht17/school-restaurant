import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {CustomersModule} from './customers/customers.module';
import { CurrentOptionComponent } from './current-option/current-option.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
