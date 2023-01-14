import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavigatorComponent } from './navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SignInComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
