
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
{
    path: 'home',
    component: HomePage,
    children: [
        {
            path:'',
            loadChildren: () => import('../pages/account/account.module').then(m => m.AccountPageModule)
        },
    {
        path: 'account',
        loadChildren: () =>
        import('../pages/account/account.module').then(m => m.AccountPageModule)
    },
    {
        path: 'orders',
        loadChildren: () =>
        import('../pages/productlisting/productlisting.module').then(
        m => m.ProductlistingPageModule
        )
    },
    {
        path: 'notifications',
        loadChildren: () =>
        import('../pages/notifications/notifications.module').then(
        m => m.NotificationsPageModule
        )
    },
    {
        path: 'enterorder',
        loadChildren: () =>
        import('../pages/enterorder/enterorder.module').then(
        m => m.EnterorderPageModule
        )
    },
    {
        path: 'closes',
        loadChildren: () =>
        import('../pages/closes/closes.module').then(
        m => m.ClosesPageModule
        )
    }
    ]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRouter {}