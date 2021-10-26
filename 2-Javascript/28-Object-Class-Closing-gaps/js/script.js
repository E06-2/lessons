// array contains any data type (Order is Important)
let array = [5, "s", true, {f: 10}]
// object contains any data type, (the order is not important)
let obj = {
    number: 5,
    string: "s", 
    b: true,
    o: {
        f:10
    }, 
    t: ()=>{
        
        return 5
    }
}
// class ===> object (a new data type)

/**
 * Humman Class
 * @author Mostafa
 */
class Humman{
    // Attributes
    /**
     * First Name Attribute
     */
    firstName = "F_Name";
    lastName = "L_Name";
    married;
    age = 0;
    ID =  0;
    // this is the first method, will be triggerd when we create an instance for this class
    /**
     * Constructor for Humman Class
     * @param {string} fname First Name
     * @param {string} lname Last Name
     * @param {number} age Age Positive Number
     */
    constructor(fname , lname , age){
        this.firstName = fname
        this.lastName = lname
        this.age = age
        console.log("a new Humman has been created!")
    }
    isAdult(){
        if(this.age >= 18)
            return true
        return false
    }
    isYoung(){
        if (!this.isAdult())
        // if(this.age < 18)
            return true
        return false
    }
    /**
     * Setter for Married
     * @returns {Boolean} true if set is done, false if not
     */
    setMarried(){
        if(this.isAdult()){
            this.married = true
            console.log("Married now!")
            return true
        }else{
            console.log("Cannot married, age less than 18")
            return false
        }
    }
    getFullName(){
        console.log(this.firstName + " " + this.lastName)
        return this.firstName + " " + this.lastName
    }
}

// let x = Number(10)
// Creating an instance of Humman class
// create an instance === create a variable with sam type
let person1 = new Humman("Mostafa", "Othman", 15)
let person2 = new Humman("Ahmad", "Osman", 30)
person2.setMarried()
// console.log(person1)
// console.log(person2)
// console.log("Person1 Adult:",person1.isAdult())
// console.log("Person2 Adult:",person2.isAdult())
// console.log("Person1 Young:",person1.isYoung())
// console.log("Person2 Young:",person2.isYoung())
// console.clear()
// console.log(person1.age)
// person1.age = 50
// console.log(person1.age)

// console.log(person1.fullName())
let person1FullName = person1.fullName()
console.log("Person 1 Full Name: ", person1FullName)
person2.fullName()

/**
 * To test Methods (Functions):
 * 1- if the method has return (none void):
 *      log this function or store it in variable and log this variable
 * 2- if the method is void (NO RETURN):
 *      just call this function back
 */
