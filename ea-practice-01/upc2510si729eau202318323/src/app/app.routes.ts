import { Routes } from '@angular/router';
import { HomeComponent } from "./public/pages/home/home.component";
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import {BundleManagementComponent} from './store/pages/bundle-management/bundle-management.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'store/bundles', component: BundleManagementComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
