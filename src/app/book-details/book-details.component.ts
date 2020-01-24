import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { DataService } from '../service/data-service.service';
import { Author } from '../model/author.model';
import { IssuedItem } from '../model/issueditem.model';
import { Account } from '../model/account.model';
import { AuthService } from '../service/auth-service.service';
import { IssueService } from '../service/issue-service.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  authors: Author[] = [];
  issueItem: IssuedItem;
  date = new Date();
  currentDate: string;
  dueDate: string;
  account: Account;


  constructor(private dataService: DataService,
              private authService: AuthService,
              private issueService: IssueService, 
              private route: Router,
              private datePipe:DatePipe) {
    this.book = new Book();
    this.issueItem = new IssuedItem();
    this.account = new Account();
  }

  ngOnInit() {
    this.dataService.data.subscribe(book => { this.book = book });
    this.authors = this.book.authors;
    this.account = this.authService.loggedInAccount;

  }

  issue() {
    // this.currentDate = this.date.toString();
    // this.dueDate = new Date(this.date.setDate(this.date.getDate() + 30)).toString();
    this.currentDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.dueDate = this.datePipe.transform(this.date.setDate(this.date.getDate() + 30), 'yyyy-MM-dd');
    this.issueItem.account = this.account;
    this.issueItem.book = this.book;

  }

  issueConfirm() {
    this.issueItem.setIssueDate = this.currentDate;
    this.issueItem.setDueDate = this.dueDate;
    this.issueService.issueBook(this.issueItem).subscribe(item => {
      alert("Book Issued Successfully! Issue Id: " + item.issueId);
      this.route.navigate(['/search']);
    });

    

  }




}
