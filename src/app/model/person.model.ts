export class Person{

    private personId:number;
    private name:string;
    private dob:string;
    private subscriptionDate:string;
    private phone:string;
    private gender:string;

    public setSubscriptionDate(date:string){
        this.subscriptionDate = date;
    }

    public getName():string{
        return this.name;
    }
    
}