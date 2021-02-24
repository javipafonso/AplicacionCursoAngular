import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { BOOKS } from '../models/books.data';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {
  
  urlBase : string;
  constructor(private servHttp : HttpClient) { 
    this.urlBase = environment.urlSearch;
  }

  findBookMock(bookId) : Array<Book> {
    return BOOKS;
  }
  getMockAsync(bookId) : Promise<Array<Book>>{
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        return resolve(BOOKS)
      }, 2000)
    })
    
  }
  getMockRx(bookId) : Observable<Array<Book>>{
    return new Observable(
      (observer) => {
        setTimeout(() => {
          return observer.next(BOOKS)
        }, 2000)
      }
    ) 
  }

  getBooks(key): Observable<Array<Book>>{
    return this.servHttp.get(this.urlBase+key).pipe(
      map(
      (resp:any) => resp.items.map(
        item => {
      return new Book(item.id,item.volumeInfo.title,item.volumeInfo.authors)}))) 
    
  }
  
    // return new Promise((resolve,reject) => {
    //   setTimeout(() => {
    //     return resolve(BOOKS)
    //   }, 2000)
    // })
    
  
}
