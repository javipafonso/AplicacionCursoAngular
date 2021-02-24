import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksServiceService } from 'src/app/services/books-service.service';

@Component({
  selector: 'vwn-by-service',
  templateUrl: './by-service.component.html',
  styleUrls: ['./by-service.component.scss']
})
export class ByServiceComponent implements OnInit {

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
    this.ls.getBooks(this.key).subscribe((resp : Array<Book>) => { this.books = resp})
  }

}
