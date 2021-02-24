import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksapiService {
  urlBaseApi : string;
  constructor(private servHttp : HttpClient) { 
    this.urlBaseApi = environment.urlApi;
  }

  //get
  getBook(index:number) : Observable<Book>{
    return this.servHttp.get(this.urlBaseApi+ "/" +index) as Observable<Book>;
  }
  //getAll
  getAllBooks() : Observable<Array<Book>>{
    return this.servHttp.get(this.urlBaseApi) as Observable<Array<Book>>;
  }
  //post
  createBook(book : Book) : Observable<Book>{
    return this.servHttp.post(this.urlBaseApi, book) as  Observable<Book>;
  }
  //put
  updateBook(index: number,book : Book) : Observable<Book>{
    return this.servHttp.put(this.urlBaseApi+index, book) as  Observable<Book>;
  }
  //delete
  deleteBook(index: number) : Observable<any>{
    return this.servHttp.delete(this.urlBaseApi+index) ;
  }
}
