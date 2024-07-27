// Activity 1: Class Definition

// Task 1:

class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.fname}!`);
    }

    updateAge (newAge) {
        this.age = newAge;
        console.log(`I have updated my age to ${this.age}!`);
    }

    static staticGreet () {
        console.log("Hello, my name is a static function!");
    }

    get fullName() {
        return `The Full Name is ${this.fname} ${this.lname}...`
    }

    set updateName (name) {
        this.fname = name.fname;
        this.lname = name.lname;
        console.log(`I have updated my name to ${this.fname} ${this.lname}!`);
    }
};

const sahil = new Person("Sahil", 22);

sahil.greet();

// Task 2:
sahil.updateAge(23);

sahil.newfunc = function () {
    console.log("This is a new function in the Person class");
}

sahil.newfunc(); // This will log "This is a new function in the Person class" to the console.

// Activity 2: Inheritance

// Task 3:

class Student extends Person {
    constructor(fname, age, id) {
        super(fname, age);
        this.id = id;
        Student.numberOfStudent++;
    }

    getId() { return this.id; }

    greet() {
        console.log(`Hello, my name is ${this.name}! I am a student with ID ${this.getId()}`);
    }

    static numberOfStudent = 0;
}

const student = new Student("Sahil", 20, 123456);

console.log(student.getId());



// Task 4:

student.greet();


// Activity 3: Static Methods and Properties

// Task 5:

Person.staticGreet();

// Task 6:


console.log(`Number of Students: ${Student.numberOfStudent}`)

const newStudent = new Student("Coffee", 10, 52146);

console.log(`Number of Students: ${Student.numberOfStudent}`)


// Activity 4: Getters and Setters

// Task 7:

const newPerson = new Person("Chai,", "Code", 4);

console.log(newPerson.fullName);


// Task 8

newPerson.updateName = { fname: "Coffee", lname: "Code" };

console.log(newPerson.fullName);


// Activity 5: Private Fields (Optional)

// Task 9:

class Account {
    #Balance = 0;

    deposite (amount) {
        if (amount > 0){
            this.#Balance += amount;

        }
    }

    withdraw (amount) {
        if ( amount < this.#Balance && amount > 0){

            this.#Balance -= amount
        }
    }

    getBalance () {
        return this.#Balance;
    }
}

// Task 10:

const account = new Account();

account.deposite(1000);

console.log(account.getBalance());


