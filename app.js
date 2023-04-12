// // // Question no 1

function function1 (num1){
  return function (num2 ) {
      console.log(num2 + num1)
  }
}
let parentnum = function1(5);
parentnum(10);
// question 1 compelete

// question no 2
function searchValue(value) {
    for (let a = 0; a < arr.length; a++)
        if (value === arr[a]) {
            return true
        }
    return false
}
let num = searchValue(10);
console.log(num);


// question no 3 
function addPara(para) {
   document.getElementById("my-para").innerText = para;
    
}
addPara("Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est eos voluptates quos suscipit at a eveniet pariatur quis voluptate?")

// question no 4
  function addItem () {
    let item = document.createElement("li");
    item.innerHTML = "third";
   document.getElementById("demoA").appendChild(item);
   
}
   addItem("");

// question no 5

   function changecolor ( color1){
   let color = document.getElementById("color-change");
   color.style.backgroundColor = color1 ;
}
let a = changecolor("#ff0");
 changecolor("#ff0");

// question no 6

let obj = {
    name: 'usman',
    age: 12,
    nationality: 'Pakistani'
}

localStorage.setItem('details',JSON.stringify(obj))
// question no 7
let getDetails = JSON.parse(localStorage.getItem('details'))

console.log(getDetails)
//  qustion no 8 
let prestudent = localstorage.getitem("student")
let students = prestudent ? JSON.parse(prestudent):[];
function datastudents ()
    let std ={
        name :prompt("enter name"),
      fatherName :prompt("enter name"),
      roll:+prompt ("enter roll number"),
      className:+prompt ("enter class Name")
       }
       std.push(std);
consol.log(students);
let strigfy = JSON.stringify(students);
localStorage.setItem("student , stringfy")