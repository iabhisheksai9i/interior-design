import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RawMaterialComponent } from './pages/raw-material/raw-material/raw-material.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomepageComponent },
    { path: "raw-material",
    children:[
        {path:'', component: RawMaterialComponent,pathMatch: 'full'},
        {
        path:':id/feature',
        loadComponent:()=>import('./pages/raw-material/feature/feature.component').then(c=>c.FeatureComponent)
    }]
     },
     {
        path:'**',
        redirectTo: 'home',
     }
  
];
