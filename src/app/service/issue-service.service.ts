import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IssuedItem } from '../model/issueditem.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class IssueService{


    issueItem:IssuedItem;

    private ISSUE_BOOK_URL = "http://localhost:8880/library/issue-book";
    private RETURN_BOOK_URL = "http://localhost:8880/library/return-book";
    private GET_ISSUED_BOOKS_URL = "http://localhost:8880/library/issued-books/";
    private GET_RETURNED_BOOKS_URL = "http://localhost:8880/library/returned-books/";

    constructor(private http:HttpClient){
        this.issueItem = new IssuedItem();
    }

    issueBook(item:IssuedItem):Observable<IssuedItem>{
        return this.http.post<IssuedItem>(this.ISSUE_BOOK_URL,item);
    }

    returnBook(item:IssuedItem):Observable<IssuedItem[]>{
        return this.http.post<IssuedItem[]>(this.RETURN_BOOK_URL,item);
    }

    getIssuedBooks(accountId:number):Observable<IssuedItem[]>{
        return this.http.get<IssuedItem[]>(this.GET_ISSUED_BOOKS_URL+accountId.toString());
    }

    getReturnedBooks(accountId:number):Observable<IssuedItem[]>{
        return this.http.get<IssuedItem[]>(this.GET_RETURNED_BOOKS_URL+accountId.toString());
    }
}
