let number : string; //zabezpieczenie typu zmiennej

number = true; //probujemy przypisac boolean i dostajemy błąd
number = 'true'; // to już jest ok

let union: string | boolean; //typ zmiennej to string lub boolean

union =true; // jest ok 
union ='true'; // o to tez jest ok

// Funkcje

let x=5;
let y=4;

const add = (x,y) => x+y; 

const add = (x: number,y?: number) => x+y; //zabezpieczenie typów w funkcji
// znak zapytania przy y oznacze, że jest to parametr opcjonalny w funkcji
// gdy przypisujemy wartość domyślną np.  const add = (x: number,y=0) nie musimy podawać typu zmiennej typescript wie po wartości zmiennej

console.log(add(x,y));


// Klasy

class Example {
    // public id: number; //dostepne na zewnatrz klasy
    // private name: string; //dostepne tylko w klasie
    // public readonly id1: number; //dostępne ale nie można przypisać wartości

    constructor(public id: number, private name: string, public readonly id1: number) {

    }

    changeId(){
        this.id1 = 5;
    } 
}

const example = new Example(55, "Samuraj");

example.name;

// Interfejsy

interface Provider  {
 id: number;
 sendInfo(numberofVisits): void;

}

class Example1 implements Provider {
    // public id: number; //dostepne na zewnatrz klasy
    // private name: string; //dostepne tylko w klasie
    // public readonly id1: number; //dostępne ale nie można przypisać wartości

    constructor(public id: number, private name: string, public readonly id1: number) {

      
 
    } 
    sendInfo() {}
}