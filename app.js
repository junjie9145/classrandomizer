//setting var for input and output
const studentName = document.querySelector(".student-input");
const addStudent = document.querySelector(".add-name-btn");
const randomStudent = document.getElementById("student");
const randomizer = document.querySelector(".randomizer");
const nameList = document.querySelector(".studentlist");
let studentList = [];
let randomList = [];

//eventlisteners
addStudent.addEventListener("click", pushStudent);
randomizer.addEventListener("click", randomChoice);


//functions
function pushStudent(e) {
    e.preventDefault();
    if (studentName.value != "") {
        studentList.push(studentName.value);
        //make the list
        const x = document.createElement("li");
        x.innerText = studentName.value;
        x.classList.add("student-list-child");
        nameList.appendChild(x);
        //create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deletebtn");
        deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
        x.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", deleteStudent);
        studentName.value ="";
    } else {
        alert ("Please enter a student's name")
    }
}

function randomChoice (e) {
    e.preventDefault();
    if (randomList.length == 0) {
        studentList.forEach((item) => {
            randomList.push(item);
        });
    }
    console.log(randomList, "before");
    let choice = Math.floor(Math.random() * randomList.length);
    randomStudent.innerHTML = randomList[choice].toString();
    randomList.splice(choice, 1)
    console.log(randomList, "after")
}

function deleteStudent (e) {
    console.log(studentList)
    const item = e.target;
    const student = item.parentNode;
    const studentIndex = studentList.indexOf(student.innerText);
    studentList.splice(studentIndex, 1);
    student.remove();
    console.log(studentList)
}
