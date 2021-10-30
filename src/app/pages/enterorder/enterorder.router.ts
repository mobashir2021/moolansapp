import { OrdersPage } from './../orders/orders.page';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterorderPage } from './enterorder.page';



const routes: Routes = [
{
    path: 'enterorder',
    component: EnterorderPage,
    children: [
        {
            path:'',
            loadChildren: () => import('../orders/orders.module').then(m => m.OrdersPageModule)
        },
    {
        path: 'orders',
        loadChildren: () =>
        import('../orders/orders.module').then(m => m.OrdersPageModule)
    },
    {
        path: 'camera',
        loadChildren: () =>
        import('../camera/camera.module').then(
        m => m.CameraPageModule
        )
    }
    ]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class EnterOrderRouter {}