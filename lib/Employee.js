// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };
};
Employee.prototype.getName()= ()=>{
    console.log(this.name);
    return this.name;
};

Employee.prototype.getId() = function(){
    console.log(this.id);
    return this.id;
};

Employee.prototype.getEmail()= function(){
    console.log(this.email);
    return this.email;
};

Employee.prototype.getRole()= function(){
    console.log('Employee');
    return 'Employee';
};

module.exports =  Employee;