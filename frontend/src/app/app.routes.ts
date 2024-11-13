import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { authGuard } from './authGuard/auth.guard';

export const routes: Routes = [
    { path: '', component:LoginComponent, pathMatch: 'full' },
    { path: "home", loadComponent: () => import('./pages/homepage/homepage.component').then(c =>c.HomepageComponent), canActivate:[authGuard],
        title:'Homepage'
    },
    { path: "login", component: LoginComponent,title:'Login' },
    { path: "reg", component: RegistrationComponent,title:'Register' },
    { path: "raw-material",
    children:[
        {path:'', loadComponent: () => import('./pages/raw-material/raw-material/raw-material.component').then(c =>c.RawMaterialComponent),pathMatch: 'full',
            title:'All Products'
        },
        {
        path:':id/feature',canActivate:[authGuard],
        loadComponent:()=>import('./pages/raw-material/feature/feature.component').then(c=>c.FeatureComponent),title:'Details'
    }]
     },
     {
        path:'**',
        redirectTo: 'home',
     }
  
];
