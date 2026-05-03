import { Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category';
import { PreparationComponent } from './components/preparation/preparation';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found';

export const routes: Routes = [
  { path: 'categories', component: CategoryComponent },
  { path: 'preparation', component: PreparationComponent },
  { path: '', redirectTo: '/categories/angular', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
