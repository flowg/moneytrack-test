/**
 * Angular imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * 3rd-party imports
 */
import { Observable } from 'rxjs';

/**
 * App imports
 */
import { AccountService } from '../account.service';

@Component( {
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.scss']
} )
export class WalletComponent implements OnInit {
    today: number = Date.now();
    balance: Observable<number>;

    constructor( private accountService: AccountService ) {
    }

    ngOnInit() {
        this.balance = this.accountService.getCurrentBalance();
    }
}
