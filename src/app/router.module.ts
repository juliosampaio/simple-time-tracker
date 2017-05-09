import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../app/auth/auth.guard';
import { LoginComponent } from '../app/auth/login/login.component';
import { TagsComponent } from '../app/tag/tags.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, outlet: "login"},
  { path: 'tags', component: TagsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
