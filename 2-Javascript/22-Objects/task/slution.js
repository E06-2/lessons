// task 1
const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    print: function() {
        console.log(`${this.firstName} ${this.lastName} is a student in class` + 
        ` ${this.class}`);
    }
 };

 student.print()


 // task 2
 const person = {
     firstName: "John",
     lastName: "Smith",
     age: 41,
     job: "Engineer",
     city: "Berlin",
     print: function() {
         console.log(`${this.firstName} ${this.lastName} is a ${this.age} ` + 
         `year old ${this.job} living in ${this.city}`);
     },
     length: function() {
         console.log(Object.keys(this).length);
     }
 }

 person.print();
 person.length();
// const newArr = [...oldArr]
 //const person2 = person;
 // copy an object to new one
 const person2 = {...person};
 person.firstName = 'Mark';
 //person2.print();
 console.log(person2.firstName);

 