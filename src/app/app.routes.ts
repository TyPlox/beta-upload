import { Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DemoComponent } from './demo/demo.component';

export const rootRouterConfig: Routes = [
  {
    path: 'demo',
    component: DemoComponent
  },
  { path: '',
    redirectTo: 'home/two',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home/two'
  }
];