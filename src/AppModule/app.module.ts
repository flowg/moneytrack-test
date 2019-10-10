/**
 * Angular imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

/**
 * App imports
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { WalletComponent } from './wallet/wallet.component';
import { AccountHistoryComponent } from './account-history/account-history.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule( {
    declarations: [
        AppComponent,
        WalletComponent,
        AccountHistoryComponent,
        OrderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTableModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule {
}
