import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home-page/home-page').then(m => m.HomePage)
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./portfolio-page/portfolio-page').then(m => m.PortfolioPage)
  },
  {
    path: 'portfolio/:id',
    loadComponent: () => import('./portfolio-page/project-detail-page/project-detail-page').then(m => m.ProjectDetailPage)
  },
  {
    path: 'bio',
    loadComponent: () => import('./bio-page/bio-page').then(m => m.BioPage)
  },
  {
    path: 'hobbies',
    loadComponent: () => import('./hobbies-page/hobbies-page').then(m => m.HobbiesPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact-page/contact-page').then(m => m.ContactPage)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
