import { Routes } from '@angular/router';
import { HomeComponent } from "./public/pages/home/home.component";
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { EventRatingComponent } from './engagement/pages/event-rating/event-rating.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'engagement/ratings/new', component: EventRatingComponent},
    { path: '**', component: PageNotFoundComponent }
];
