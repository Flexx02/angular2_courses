import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  links = [
    { path: '/dashboard', icon: 'home',             label: 'Главная'},
    { path: '/film',      icon: 'settings',         label: 'Все фильмы'},
    { path: '/profile',   icon: 'featured_video',   label: 'Профиль'}
  ];
}


