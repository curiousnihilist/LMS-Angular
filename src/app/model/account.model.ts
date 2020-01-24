import { Person } from './person.model';

export class Account{

    public accountId:number;
    public person:Person;
    private email:string;
    private password:string;
    private role:string;

    public setRole(role:string){
        this.role = role;
    }

    public setPerson(person:Person){
        this.person = person;
    }

    public getperson():Person{
        return this.person;
    }
 
}