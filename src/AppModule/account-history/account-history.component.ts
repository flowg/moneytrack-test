/**
 * Angular imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * App imports
 */
import { AccountService, Article, Payment } from '../account.service';

/**
 * TypeScript entities and constants
 */
interface Transaction {
    date: string;
    amount: number;
    article: string;
    status: string;
}

@Component( {
    selector: 'app-account-history',
    templateUrl: './account-history.component.html',
    styleUrls: ['./account-history.component.scss']
} )
export class AccountHistoryComponent implements OnInit {
    accountHistory: Transaction[] = [];
    columnsToDisplay = ['date', 'amount', 'article', 'status'];
    readyToDisplay = false;

    constructor( private accountService: AccountService ) {
    }

    ngOnInit() {
        this.accountService.getAllPayments()
            .subscribe( {
                next: ( payments: Payment[] ) => {
                    const articles: Map<number, Article> = this.accountService.getArticles();

                    for ( const payment of payments ) {
                        const associatedArticle: Article = articles.get( payment.article_id );
                        this.accountHistory.push( {
                            date: payment.payment_date,
                            amount: associatedArticle.price,
                            article: associatedArticle.label,
                            status: payment.state
                        } );
                    }

                    this.readyToDisplay = true;
                }
            } );
    }
}
