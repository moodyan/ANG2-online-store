import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { MarketplaceComponent }   from './marketplace/marketplace.component';
import { MerchComponent }   from './merch/merch.component';
import { AlbumComponent }   from './album/album.component';
import { AlbumDetailComponent }   from './album-detail/album-detail.component';
import { MerchDetailComponent }   from './merch-detail/merch-detail.component';
import { AdminComponent }   from './admin/admin.component';
import { PriceFilterPipe } from './price-filter.pipe';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'albums',
    component: AlbumComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent
  },
  {
    path: 'merch',
    component: MerchComponent
  },
  {
     path: 'merch/:id',
     component: MerchDetailComponent
   },
   {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
