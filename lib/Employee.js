// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
}
Employee.prototype.getName(){
    console.log(this.name)
    return this.name
}

Employee.prototype.getId(){
    console.log(this.id)
    return this.id
}

Employee.prototype.getEmail(){
    console.log(this.email)
    return this.email
}

Employee.prototype.getRole(){
    console.log('Employee')
    return 'Employee'
}