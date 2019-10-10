/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * App imports
 */
import { WalletComponent } from './wallet/wallet.component';
import { AccountHistoryComponent } from './account-history/account-history.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
    {
        path: 'wallet',
        component: WalletComponent
    },
    {
        path: 'account-history',
        component: AccountHistoryComponent
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: '',
        redirectTo: '/wallet',
        pathMatch: 'full'
    }
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule {
}
