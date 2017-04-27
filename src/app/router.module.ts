import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/auth/login/login.component';
import { TagsComponent } from '../app/tag/tags.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
