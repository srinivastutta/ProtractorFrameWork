class Employee{
    
    setDetails(name, id){
        this.name=name;
        this.id=id;
    }

}

let emp = new Employee();
emp.setDetails('Jack', 123);

console.log (emp.name);
console.log (emp.id);