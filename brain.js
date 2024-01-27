const todocontainer = document.getElementById("todocontainer");
const todolist = document.getElementById("todolist");

function addit(){
    if(todolist.value === ''){
        alert("write something to proceed further");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todolist.value;                   /* The text in the li element is assigned as the todolist value i.e we type the text value */
        todocontainer.appendChild(li);                 /* here we added the li to the todocontainer i.e in the  "UL" list tag */
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    todolist.value='';
    saveData();
}

todocontainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data" , todocontainer.innerHTML);        /* here we save the value to be stored in the todocontainer */
}

function showTask(){
    todocontainer.innerHTML = localStorage.getItem("data");   /* here whenever we load the website the Browser we call the data saved in the localStorage */
}
showTask();

let childElement = document.getElementById("todocontainer").childElementCount;
console.log(childElement);

if (childElement>3){
   todocontainer.classList.add("scroll");
}