import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'auth',loadChildren:()=>import('./features/auth/auth.routes').then(login=>login.AUTH_ROUTES)
  },
  {
    path:'notary',loadChildren:()=>import('./features/notary/notary.routes').then(notary=>notary.NOTARY_ROUTES)
  }
];
