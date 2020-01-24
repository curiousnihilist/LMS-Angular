import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/service/issue-service.service';
import { IssuedItem } from 'src/app/model/issueditem.model';
import { AuthService } from 'src/app/service/auth-service.service';
import { Book } from 'src/app/model/book.model';
import { Account } from 'src/app/model/account.model';

@Component({
  selector: 'issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})

//getreturnedboooks
export class IssuedBooksComponent implements OnInit {

  private issuedItems:IssuedItem[] = [];
  book:Book;
  account:Account;

  constructor(private issueService:IssueService, private authService:AuthService) {
    this.book = new Book();
    this.account = new Account();
   }

  ngOnInit() {
    this.issueService.getReturnedBooks(this.authService.loggedInAccount.accountId).subscribe(
      issuedItems => {this.issuedItems = issuedItems}
    );
  }

}
