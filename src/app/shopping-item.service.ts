import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {ShoppingItem} from './shoppingitems';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ShoppingItemService {

  //private shoppingitemsUrl = 'api/shoppingitems';  // URL to web api
  //private sortUrl= 'api/shoppingitems';
  private shoppingitemsUrl = 'http://localhost:3000/stickies';  // URL to web api

  constructor(
    private http: HttpClient) { }



  //Get all shopping items
  getShoppingItems(): Observable<ShoppingItem[]> {
    // Todo: send the message _after_ fetching the items
    //this.messageService.add('shoppingItemService: fetched items');
    //return of(SHOPPINGITEM);
    return this.http.get<ShoppingItem[]>(this.shoppingitemsUrl)
    .pipe(
      //ctap(shoppingitems => this.log(`fetched shoppingitems`)),
      catchError(this.handleError('getShoppingItems', []))
    );
  }

  
  sortShoppingItems(): Observable<ShoppingItem[]>{
    return this.http.get<ShoppingItem[]>(this.shoppingitemsUrl)
    .pipe(
      //tap(shoppingitems => this.log(`fetched shoppingitems`)),
      catchError(this.handleError('getShoppingItems', []))
    );

  }


  //Get the item with the specified name
  getShoppingItem(name: string): Observable<ShoppingItem> {
    //console.log(name);
    //const url = `${this.shoppingitemsUrl}/?name=${name}`;
    // return this.http.get<ShoppingItem>(url).pipe(
    //   // catchError(this.handleError<ShoppingItem>('getShoppingItems', ))
    //   //tap(_ => this.log(`fetched item name=${name}`)),
    //   catchError(this.handleError<ShoppingItem>(`getShoppingItem name=${name}`))
    // );
    return this.http.get<ShoppingItem[]>(this.shoppingitemsUrl)
    .map(items => {
      let im = items.filter(item => item.name === name);
      return (im.length > 0) ? im[0] : null;
    });
  }


//GET items whose name contains search term
searchShoppingItems(term: string): Observable<ShoppingItem[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<ShoppingItem[]>(`http://localhost:3000/stickies/?name=${term}`).pipe(
   // tap(_ => this.log(`found shoppingitems matching "${term}"`)),
    catchError(this.handleError<ShoppingItem[]>('searchShoppingItems', []))
  );
}


/** POST: add a new hero to the server */
// addShoppingItem (shoppingItem: ShoppingItem): Observable<ShoppingItem> {
//   return this.http.post<ShoppingItem>(this.shoppingitemsUrl, shoppingItem, httpOptions).pipe(
//    // tap((shoppingItem: ShoppingItem) => this.log(`added hero w/ id=${hero.id}`)),
//     catchError(this.handleError<ShoppingItem>('addShoppingItem'))
//   );
// }








  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}




}
