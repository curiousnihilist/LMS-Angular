import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/service/issue-service.service';
import { IssuedItem } from 'src/app/model/issueditem.model';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'return-books',
  templateUrl: './return-books.component.html',
  styleUrls: ['./return-books.component.css']
})
export class ReturnBooksComponent implements OnInit {

  issuedItems:IssuedItem[]=[];

  constructor(private issueService:IssueService, private authService:AuthService) { }

  ngOnInit() {
    this.issueService.getIssuedBooks(this.authService.loggedInAccount.accountId).subscribe(items =>{
      this.issuedItems = items;
    })
  }

  returnBook(item:IssuedItem){
    this.issueService.returnBook(item).subscribe(item => { alert("Book returned Successfully!")});
    this.ngOnInit();
  }

}
