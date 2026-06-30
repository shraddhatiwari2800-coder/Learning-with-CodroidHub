let student1 = {
    name: "Aman",
    course: "HTML",
    marks: 450,
    age: 20
};

let student2 = {
    name: "Priya",
    course: "CSS",
    marks: 380,
    age: 19
};

let student3 = {
    name: "Rahul",
    course: "JavaScript",
    marks: 325,
    age: 21
};

let student4 = {
    name: "Sneha",
    course: "Python",
    marks: 295,
    age: 20
};

let student5 = {
    name: "Rohan",
    course: "Java",
    marks: 180,
    age: 22
};

let students = [
    student1,
    student2,
    student3,
    student4,
    student5
];

let totalMarks = 500;

for(let student of students){

    let percentage = (student.marks / totalMarks) * 100;

    let result;

    if(percentage >= 40){
        result = "Pass";
    }
    else{
        result = "Fail";
    }

    let grade;

    if(percentage >= 80){
        grade = "A";
    }
    else if(percentage >= 60){
        grade = "B";
    }
    else if(percentage >= 40){
        grade = "C";
    }
    else{
        grade = "F";
    }

    console.log("Student Name:", student.name);
    console.log("Total Marks:", student.marks);
    console.log("Percentage:", percentage.toFixed(2) + "%");
    console.log("Result:", result);
    console.log("Grade:", grade);
    console.log("-----------------------");
}