import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'chooselocation',
    loadChildren: () => import('./pages/chooselocation/chooselocation.module').then( m => m.ChooselocationPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/enterorder/enterorder.module').then( m => m.EnterorderPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'editsettings',
    loadChildren: () => import('./pages/editsettings/editsettings.module').then( m => m.EditsettingsPageModule)
  },
  {
    path: 'deliveryaddress',
    loadChildren: () => import('./pages/deliveryaddress/deliveryaddress.module').then( m => m.DeliveryaddressPageModule)
  },
  {
    path: 'productlisting',
    loadChildren: () => import('./pages/productlisting/productlisting.module').then( m => m.ProductlistingPageModule)
  },
  {
    path: 'changelocation',
    loadChildren: () => import('./pages/changelocation/changelocation.module').then( m => m.ChangelocationPageModule)
  },
  {
    path: 'closes',
    loadChildren: () => import('./pages/closes/closes.module').then( m => m.ClosesPageModule)
  }
  // ,
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'index',
  //   loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  // },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  // },
  // {
  //   path: 'orders',
  //   loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  // },
  // {
  //   path: 'account',
  //   loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  // },
  // {
  //   path: 'notifications',
  //   loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
