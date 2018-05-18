import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/component.module' ;
import { AppComponent } from './app.component';

import { UserPage } from './pages/users/user';
import { ProfilePage } from './pages/profile/profile';

import { Users } from './providers/user';

import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    UserPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [Users],
  bootstrap: [AppComponent]
})
export class AppModule { }
