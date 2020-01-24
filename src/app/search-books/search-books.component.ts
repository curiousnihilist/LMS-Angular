import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../service/book-service.service';


@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  searchBy:string;
  searchText: string = "";
  books: Book[] = [];

  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(books => {this.books = books});
  }

  searchBooksByTitle() {
    // this.books.push(new Book());
    // console.log(this.books);

    this.bookService.searchByTitle(this.searchText).subscribe( books => {this.books = books});
   
  }

  searchBooksByAuthor(){
    this.bookService.searchByAuthor(this.searchText).subscribe( books => {this.books = books});
  }

  searchBooksByIsbn(){
    this.bookService.searchByIsbn(this.searchText).subscribe( books => {this.books = books});
  }

  searchBooksByCategory(){
    this.bookService.searchByCategory(this.searchText).subscribe( books => {this.books = books});
  }

  searchBooks(){
    if(this.searchBy == "author")
      this.searchBooksByAuthor();
    if(this.searchBy == "title")
      this.searchBooksByTitle();
    if(this.searchBy == "isbn")
      this.searchBooksByIsbn();
    if(this.searchBy == "category")
      this.searchBooksByCategory();
  }

}

