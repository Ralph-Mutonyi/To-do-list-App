// Create Variables for the Elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Define Function addTask
function addTask(){
    if(inputBox.value === ''){
        alert("You must write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Add task from the input field. 
        listContainer.appendChild(li); // Display the Task in list container

        // Add cross icon at the end of list to delete task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();