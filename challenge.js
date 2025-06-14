// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.describe= function(){
//     console.log(`Name is ${this.name} and age is ${this.age}`);
    
// };

// function Student(name,school,age){
//     Person.call(this,name,age);
//     this.school = school;
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

//  Student.prototype.study = function(){
//     console.log(`${this.name} is studying at ${this.school}`);
    
//  }
//  const student1 = new Student("Alice","Harvard",21);
//  student1.describe();
//  student1.study();
// //alternative with class,we don't need to set prototypes here
// class Employee{
//     constructor(name,salary){
//     this.name = name;
//     this.salary = salary;
//     }

//     describe(){
//         console.log(`Employee ${this.name} earns ${this.salary}`);
        
//     }
// };
// class manager extends Employee{
//     constructor(name,salary,department){
//     super(name,salary);
//     this.department = department;
        
//     }
//     manage(){
//         console.log(`Manager ${this.name} manages ${this.department}`);
        
//     }
//  }

//  const manager1 = new manager('Jordan',90000,"Sales");
//  manager1.describe();
//  manager1.manage();


 //making use of getters and setters as well as static

 class book{
  constructor(title,author,year){
this.title = title;
this.author = author;
this.year = year;
  }
   get getSummary(){
console.log(`The book is titled ${this.title},it was scripted by ${this.author
}, in the year ${this.year}`);

  }
  set findBook(val){
    if(val.length > 0){
      this.title = val;
    }else{
      console.log('  book not found');
      
    }
  }
  static isBook(obj){
    console.log(  
  obj instanceof book)
  }
 }

 const book1 = new book ("Things fall apart","Chinua Achebe",1958);
 book1.getSummary;
 book.isBook(book1);
 book.isBook({title:"muskerteers"});
 //use of closures

//  for (var i = 0; i < 3; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   })(i);

//  }//gives 0,1,2

//  //without a closure
//  for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i); // What will this print?
//   }, 1000);
// }
//returns 3,3,3
const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const wrap = str => `<div>${str}</div>`;

const compose = (...fns) => input =>
  fns.reduceRight((acc, fn) => fn(acc), input);

const formatMessage = compose(wrap, toLower, trim);

console.log(formatMessage("   THIS IS THE GATE WAY TO HEAVEN   "));
// Output: <p>hello world</p>

const coded = (...fucInt)=>encode=>fucInt.reduceRight((acc,fn)=>fn(acc), encode);
