import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'vwn-search-google-api',
  templateUrl: './search-google-api.component.html',
  styleUrls: ['./search-google-api.component.scss']
})
export class SearchGoogleApiComponent implements OnInit {
  key : string;
  books : Array<Book>
  urlSearch : string ;
  constructor(private servhttp : HttpClient) { }

  ngOnInit(): void {
    this.key= '';
    this.books = []
    this.urlSearch = environment.urlSearch;
  }
  
  onSearch(){
    if (!this.key){
      return
    }
    
    this.servhttp.get(this.urlSearch+this.key).toPromise().then(
      (resp:any) => 
      { this.books = resp.items.map(item => { 
        return new Book(item.id,item.volumeInfo.title,item.volumeInfo.authors)
        }
        )
      })
      this.key='';
  }
  onSearchRx(){
    if (!this.key){
      return
    }
    this.servhttp.get(this.urlSearch+this.key).pipe(map((resp:any) => resp.items.map(item => {
        return new Book(item.id,item.volumeInfo.title,item.volumeInfo.authors)}))).subscribe(
          (resp : Array<Book>) => this.books = resp
        )
        this.key='';
  }

}
