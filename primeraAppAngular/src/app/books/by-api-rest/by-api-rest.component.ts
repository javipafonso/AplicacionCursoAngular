import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksapiService } from 'src/app/services/booksapi.service';

@Component({
  selector: 'vwn-by-api-rest',
  templateUrl: './by-api-rest.component.html',
  styleUrls: ['./by-api-rest.component.scss']
})
export class ByApiRestComponent implements OnInit {

  title : string;
  author : string;
  books : Array<Book>
  constructor(private als : BooksapiService) { }

  ngOnInit(): void {
    this.title = '';
    this.author = '';
    this.books = []
  }
  
  onAdd(){
    const book = {id:null,autores:[this.author],title: this.title}
    this.als.createBook(book).subscribe();
    
  }
  onShow(){
    this.als.getAllBooks().subscribe(
      (resp : Array<Book>) => this.books  = resp
    )
  }

}
