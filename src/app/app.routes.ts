import { Routes } from '@angular/router';
import { NavbarComponent } from '../app/pages/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "nav", component: NavbarComponent },
    { path: "home", component: HomepageComponent },

];
