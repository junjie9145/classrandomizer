//setting var for input and output
const studentName = document.querySelector(".student-input");
const addStudent = document.querySelector(".add-name-btn");
const randomStudent = document.getElementById("student");
const randomizer = document.querySelector(".randomizer");
const nameList = document.querySelector(".studentlist");
let studentList = [];

//eventlisteners
addStudent.addEventListener("click", pushStudent)
randomizer.addEventListener("click", randomChoice);

//functions
function pushStudent(e) {
    e.preventDefault();
    if (studentName.value != "") {
        studentList.push(studentName.value);
        const x = document.createElement("li");;
        const text = document.createTextNode(studentName.value.toString());
        x.appendChild(text);
        x.classList.add("student-list-child");
        nameList.appendChild(x);   
        studentName.value ="";
    } else {
        alert ("Please enter a student's name")
    }
}

function randomChoice (e) {
    e.preventDefault();
    let choice = Math.floor(Math.random() * studentList.length);
    randomStudent.innerHTML = studentList[choice].toString();
}

