import { Routes } from '@angular/router';

import { PublicLayout } from './layouts/public-layout/public-layout';
import { Home } from './features/home/pages/home/home';
import { GalleryPage } from './features/gallery/pages/gallery-page/gallery-page';


export const routes: Routes = [

  {
    path: '',
    component: PublicLayout,

    children: [

      {
        path: '',
        component: Home
      },

      {
        path: 'galeria',
        component: GalleryPage
      }

    ]
  },


  {
    path: '**',
    redirectTo: ''
  }

];