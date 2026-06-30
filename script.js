// Task 1: Internal JavaScript


console.log("This message is printed using Internal JavaScript.");


// Task 2: Data Types Practice


let age = 22;
let name = "Aman";
let isStudent = true;
let city;
let marks = null;
let salary = 9007199254740991n;
let id = Symbol("id");

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Undefined:", city);
console.log("Null:", marks);
console.log("BigInt:", salary);
console.log("Symbol:", id);


// Task 3: Student Information


let studentName = "Aman";
let studentAge = 20;
let course = "Full Stack Development";
let studentCity = "Ambala";

console.log("Student Name:", studentName);
console.log("Age:", studentAge);
console.log("Course:", course);
console.log("City:", studentCity);


// Task 4: Employee Object


let employee = {
    name: "Rahul",
    department: "IT",
    salary: 40000,
    experience: 3
};

console.log(employee);
console.log(employee.name);
console.log(employee.salary);

employee.salary = 45000;

console.log(employee);


// Task 5: Mobile Object


let mobile = {
    brand: "Samsung",
    model: "Galaxy A35",
    price: 30000,
    color: "Black"
};

console.log(mobile);

mobile.price = 28000;

console.log(mobile);


// Task 6: Array Practice


let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

fruits.push("Pineapple");
fruits.push("Kiwi");

console.log(fruits.length);
console.log(fruits);


// Task 7: Student Array


let subjects = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];

console.log(subjects[0]);
console.log(subjects[2]);

subjects.push("MongoDB");

console.log(subjects.length);
console.log(subjects);


// Task 8: Arithmetic Operators


let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);


// Task 9: Salary Calculator


let basicSalary = 25000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;

console.log("Total Salary:", totalSalary);


// Task 10: Assignment Operators


let marksValue = 50;

marksValue += 10;
console.log(marksValue);

marksValue -= 5;
console.log(marksValue);

marksValue *= 2;
console.log(marksValue);

marksValue /= 5;
console.log(marksValue);

marksValue %= 3;
console.log(marksValue);


// Task 11: Comparison Operators


let x = 10;
let y = 20;

console.log(x > y);
console.log(x < y);
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);


// Task 12: Logical Operators


let userAge = 22;

console.log(userAge > 18 && userAge < 30);
console.log(userAge > 25 || userAge < 30);
console.log(!(userAge > 18));


// Task 13: Increment & Decrement


let count = 10;

count++;
console.log(count);

count++;
console.log(count);

count--;
console.log(count);


// Challenge 1


let product = {
    productName: "Laptop",
    price: 60000,
    category: "Electronics",
    rating: 4.5
};

product.price = 55000;

console.log(product);


// Challenge 2


let cities = [
    "Delhi",
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Jaipur",
    "Pune",
    "Lucknow",
    "Bhopal",
    "Hyderabad",
    "Goa"
];

console.log(cities[0]);
console.log(cities[cities.length - 1]);

cities.push("Surat");

console.log(cities.length);
console.log(cities);


// Challenge 3


let myName = "Aman";
let myAge = 20;

let student = {
    name: myName,
    age: myAge,
    course: "Full Stack Development",
    city: "Ambala"
};

let skills = ["HTML", "CSS", "JavaScript"];

console.log(myName);
console.log(myAge);
console.log(student);
console.log(skills);


// Mini Project


let profileName = "Aman";
let profileAge = 20;
let profileCourse = "Full Stack Development";

let studentProfile = {
    name: profileName,
    age: profileAge,
    course: profileCourse,
    city: "Ambala"
};

let profileSkills = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log(studentProfile);
console.log(profileSkills);

profileSkills.push("React");
profileSkills.push("NodeJS");

console.log(profileSkills);