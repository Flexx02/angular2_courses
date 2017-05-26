import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilmComponent } from './film/film.component';
import { ProfileComponent } from './profile/profile.component';

import { FilmService } from './film/film.service';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FilmComponent,
    ProfileComponent
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
