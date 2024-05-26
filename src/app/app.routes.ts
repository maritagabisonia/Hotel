import { Routes } from '@angular/router';
import { MainPageComponent } from './components/leadingPage/main-page/main-page.component';
import { RegisterComponent } from './components/registration/register/register.component';
import { FavoritesComponent } from './components/favorites/favorites/favorites.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'registration', component: RegisterComponent },
    { path: 'favorites', component: FavoritesComponent },
];
