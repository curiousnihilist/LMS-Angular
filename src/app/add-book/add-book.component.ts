import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import {Author} from '../model/author.model';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  
  
  private authorArray:number[] = [1];
  private book:Book;
  private author:Author;
  private authors:Author[] = [];
  private categories = ["Computer science, information & general works",
                      "Philosophy & psychology",
                      "Religion",
                      "Social Sciences",
                      "Language",
                      "Science",
                      "Technology",
                      "Arts & recreation",
                      "Literature",
                      "History & geography"];

  constructor() { 

    this.book = new Book();
    this.author = new Author();
  }

  ngOnInit() {
  }

  addAuthor(){
    this.authors.push(this.author);
    this.book.pushAuthor(this.author);
    this.author = new Author();
  }
   addBook(){
      
       console.log(this.book);
      // this.bookService.createBook(this.book).subscribe(data => {
      //   alert("Book Added!");
      // },
      //        error => alert(error));
      //    this.book = new Book();
   }

}
