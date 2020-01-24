import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { Author } from 'src/app/model/author.model';
import { DataService } from 'src/app/service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book:Book;
  authors:Author[]=[];

  constructor(private dataService:DataService, private route:Router) {
    this.book = new Book();
   }

  ngOnInit() {
    this.authors = this.book.authors;
  }

  viewBook(){
    this.dataService.updateData(this.book);
    this.route.navigate(['/view-book']);
  }

}
