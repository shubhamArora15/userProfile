import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// import { DashboardComponent } from './dashboard/dashboard.component';
import { UserPage } from './pages/users/user';
import  {ProfilePage } from './pages/profile/profile';

const routes: Routes =[
    { path: 'users', component: UserPage},
    { path: 'users/id/:id', component: ProfilePage},
    { path: '', redirectTo: 'users', pathMatch: 'full' },
];


@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    exports: [
    ],
  })

  export class AppRoutingModule { }
  
