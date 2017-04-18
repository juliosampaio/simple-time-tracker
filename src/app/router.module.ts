import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsComponent } from '../app/tag/tags.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TagsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
