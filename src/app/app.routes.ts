import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FeatureComponent } from './pages/raw-material/feature/feature.component';
import { RawMaterialComponent } from './pages/raw-material/raw-material/raw-material.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomepageComponent },
    { path: "raw-material", component: RawMaterialComponent },
    { path: `raw-material/:id/feature`, component:FeatureComponent },
];
