function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.describe= function(){
    console.log(`Name is ${this.name} and age is ${this.age}`);
    
};

function Student(name,school,age){
    Person.call(this,name,age);
    this.school = school;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

 Student.prototype.study = function(){
    console.log(`${this.name} is studying at ${this.school}`);
    
 }
 const student1 = new Student("Alice","Harvard",21);
 student1.describe();
 student1.study();
