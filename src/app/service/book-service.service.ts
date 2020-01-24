import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class BookService{

    books:Book[] = [];


    private SEARCH_BY_TITLE = "http://localhost:8880/library/bytitle/";
    private SEARCH_BY_ISBN = "http://localhost:8880/library/getbyisbn/";
    private SEARCH_BY_CATEGORY = "http://localhost:8880/library/getbycategory/";
    private SEARCH_BY_AUTHOR = "http://localhost:8880/library/getbyauthor/";
    private GET_ALL_BOOKS = "http://localhost:8880/library/getallbooks"
    

    constructor(private http:HttpClient){}

    searchByTitle(title:string):Observable<Book[]>{
        return this.http.get<Book[]>(this.SEARCH_BY_TITLE+title);

    }

    searchByIsbn(isbn:string):Observable<Book[]>{
        return this.http.get<Book[]>(this.SEARCH_BY_ISBN+isbn);
    }

    searchByCategory(category:string):Observable<Book[]>{
        return this.http.get<Book[]>(this.SEARCH_BY_CATEGORY+category);
    }

    searchByAuthor(author:string):Observable<Book[]>{
        return this.http.get<Book[]>(this.SEARCH_BY_AUTHOR+author);
    }

    getAllBooks():Observable<Book[]>{
        return this.http.get<Book[]>(this.GET_ALL_BOOKS);
    }
      
  }