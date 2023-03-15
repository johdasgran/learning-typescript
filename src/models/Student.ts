import {Course} from './Course';

export class Student {

    //Propiedades de la clase
    name: string;
    lastName?: string;
    cursos: Course[];
    
    private DNI: number = 123456789;

    constructor(name:string, cursos: Course[], lastName?:string){
        this.name = name;
        if(lastName){
            this.lastName = lastName;
        }
        this.cursos = cursos;
    }


    get hoursStudied () : number{
        
        let hoursStudied = 0;

        this.cursos.forEach((curso: Course)=>{
            hoursStudied += curso.duration;
        })

        return hoursStudied;
    }


    set addDNI (id: number) {
        
        this.DNI = id;

    }


}