import { Book } from './book.model';
import { Account } from './account.model';

export class IssuedItem{

        public issueId:number;
        public book:Book;
        private issueDate:String;
        private dueDate:String;
        private returnDate:String;
        private fine:number;
        private status:String;
        public account:Account;

        set setIssueDate(date:string){
            this.issueDate = date;
        }

        set setDueDate(date:string){
            this.dueDate = date;
        }
   
}