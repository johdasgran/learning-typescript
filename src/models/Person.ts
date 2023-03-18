export class Person {

    name: string;
    lastName: string;
    years: number;
 
    constructor(name: string, lastName:string, years:number){
        this.name = name;
        this.lastName = lastName;
        this.years = years;
    }

    sayHi() :void {
        console.log(`Hi, my name is ${this.name} ${this.lastName} and I'm ${this.years} years old.`)
    }


}


export class Employee extends Person {

    pay: number;

    constructor(name: string, lastName: string, years:number, pay:number){
        super(name, lastName, years);
        this.pay = pay;
    }

}

export class Boss extends Person {

    employeers: Employee[] = [];

    constructor(name: string, lastName: string, years: number) {
        super(name, lastName, years)
    }


}