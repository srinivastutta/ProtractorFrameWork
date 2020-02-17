class Employee{
    
    constructor (name, id){
        this.name = name;
        this.id = id;
    }

}
//Constructor is always called whenever class is instantiated or created
let emp1 = new Employee ('Peter', 1234);
let emp2 = new Employee ('Tom', 12345);

console.log (emp1.name);
console.log (emp1.id);

console.log (emp2.name);
console.log (emp2.id);