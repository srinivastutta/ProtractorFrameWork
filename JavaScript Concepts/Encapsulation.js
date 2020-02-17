// What is encapsulation
// Encapsulation is the machanism restricting direct access to some of the objects and components
// hiding the bussiness logic

class Employee{
    //setting the employee details
    setEmpDetails(name, id, phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }
    //getting the employee details
    getEmpName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getPhoneNo(){
        return this.phoneNo
    }

}

let emp = new Employee();

emp.setEmpDetails('Peter', 1234, 999999999);

console.log (emp.getEmpName());
console.log (emp.getId());
console.log (emp.getPhoneNo());

