/**
 * Angular imports
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * 3rd-party imports
 */
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * TypeScript entities and constants
 */
interface Balance {
    balance: number;
}

export interface Article {
    label: string;
    price: number;
}

interface ArticleWithId extends Article {
    id: number;
}

export interface Payment {
    article_id: number;
    payment_date: string;
    state: string;
}

@Injectable( {
    providedIn: 'root'
} )
export class AccountService {
    private cachedArticles: Map<number, Article> = new Map<number, Article>();

    constructor( private httpClient: HttpClient ) {
        this.getAllArticles();
    }

    private getAllArticles() {
        this.httpClient.get<ArticleWithId[]>( '/articles' )
            .subscribe( {
                next: ( articles: ArticleWithId[] ) => {
                    for ( const article of articles ) {
                        this.cachedArticles.set( article.id, { label: article.label, price: article.price } );
                    }
                }
            } );
    }

    getArticles(): Map<number, Article> {
        return this.cachedArticles;
    }

    getCurrentBalance(): Observable<number> {
        return this.httpClient.get<Balance>( '/balance' )
            .pipe(
                map( ( val: Balance ) => val.balance )
            );
    }

    getAllPayments(): Observable<Payment[]> {
        return this.httpClient.get<Payment | Payment[]>( '/payments' )
            .pipe(
                map( ( val: Payment | Payment[] ) => {
                    return Array.isArray( val ) ? val : [val];
                } )
            );
    }
}
