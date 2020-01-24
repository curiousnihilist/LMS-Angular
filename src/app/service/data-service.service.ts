import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = new BehaviorSubject(new Book());
  data = this.dataSource.asObservable();

  constructor() { }

  updateData(book:Book){
    this.dataSource.next(book);
  }
}
