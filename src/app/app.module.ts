import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HeaderComponent } from './components/header/header/header.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard/leaderboard.component';
import { HomeComponent } from './components/home/home/home.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import { ParkourComponent } from './components/leaderboard/parkour/parkour.component';
import {A11yModule} from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LeaderboardComponent,
    HomeComponent,
    ParkourComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MDBBootstrapModule.forRoot(),
        A11yModule,
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
