import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "my-app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})

export class AppComponent {
  
  links = [
    { path: '/dashboard',   icon: 'home',             label: 'Главная'},
    { path: '/task',        icon: 'event_name',       label: 'Задачи'},
    { path: '/statistics',  icon: 'settings',         label: 'Статистика'},
    { path: '/film',        icon: 'featured_video',   label: 'Фильмы'}
  ];
}

