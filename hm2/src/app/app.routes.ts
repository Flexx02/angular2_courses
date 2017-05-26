import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { FilmComponent } from "./film/film.component";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
    { path: "",             redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard",    component: DashboardComponent },
    { path: "film",         component: FilmComponent },
    { path: "profile",      component: ProfileComponent }
];
