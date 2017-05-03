import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TaskComponent }  from './task/task.component';
import { TaskEditComponent }  from './task/edit/task-edit.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MdInputModule}    from '@angular/material';

import { FilmCardService } from './film-card/film-card.service';
import { StatisticsService } from './statistics/statistics.service';
import { TaskService } from './task/task.service';
import { AppService } from './app.service';
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
    TaskComponent,
    TaskEditComponent,
    StatisticsComponent,
    FilmCardComponent
  ],
  providers: [StatisticsService, TaskService, AppService, FilmCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
