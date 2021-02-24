import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksServiceService } from 'src/app/services/books-service.service';

@Component({
  selector: 'vwn-mocks',
  templateUrl: './mocks.component.html',
  styleUrls: ['./mocks.component.scss']
})
export class MocksComponent implements OnInit {
  key : string;
  books : Array<Book>
  constructor(private ls : BooksServiceService) { }

  ngOnInit(): void {
    this.key= '';
    this.books = []
  }
  
  onSearch(){
    if (!this.key){
      return
    }
    this.books = this.ls.findBookMock(this.key);
  }
  onSearchAsync(){
    if (!this.key){
      return
    }
    this.books = []
    //callback en angular no funciona
    //callback en agular promesas o observables
    this.ls.getMockAsync(this.key).then((resp) => {this.books = resp})
  }
  onSearchAsyncRx(){
    if (!this.key){
      return
    }
    this.books = []
    //callback en angular no funciona
    //callback en agular promesas o observables
    this.ls.getMockRx(this.key).subscribe((resp) => {this.books = resp})

  }
}
