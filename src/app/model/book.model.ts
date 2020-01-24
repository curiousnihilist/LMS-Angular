import { Author } from './author.model';

export class Book{


        private bookId:number;
        public title:String;
        private description:String;
        private isbn:String;
        private publisher:String;
        private category:String;
        private price:number;
        private rackId:String;
        private noOfCopies:number;
        public authors:Author[] = [];

        pushAuthor(author:Author){
                this.authors.push(author);
        }
 

    
}