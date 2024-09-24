/*
Notes to future me:

Practice more with arrays and how it works with index push.
Learn about $ and how that works.

If i was to do this project again from scratch then maybe look into dividing functionality.
This in order not have to have a big refreshList function and create the HTML ul from scratch everytime i add or remove items.
*/

const inputText = document.querySelector("#inputForm");
const submitBtn = document.querySelector("#submitButton");
const clearTodo = document.querySelector("#clearList")
const taskCounter = document.querySelector("#counterText");
const completeCounter = document.querySelector("#complTaskCounter");
const todoList = document.querySelector("#todoList");
const todoListArray = []; //clearTodoList function will not work if this is set to const. Why? Guess is that it´s because it gets redeclaired later in the code? I think in the add function

taskCounter.innerHTML = todoList.getElementsByTagName("li").length;

//buttons with click functionality
submitBtn.addEventListener("click", addTask);
clearTodo.addEventListener("click", clearTodoList);

//press enter to add item
inputText.addEventListener("keydown", 
    function (event)
    {
    if (event.key === "Enter"){
    event.preventDefault();
    addTask();
    }
    });


//Functions

//to refresh entire list
function refreshList() 
{
todoList.innerHTML="";
todoListArray.forEach((tasks, index) => {
const listItem = document.createElement("li");
const itemLabel = document.createElement("span");
todoList.appendChild(listItem);
listItem.appendChild(itemLabel);
itemLabel.textContent = tasks.text;
itemLabel.innerText = tasks.text;

const deleteTask = document.createElement("button");
deleteTask.innerHTML = "<i class= 'fa-solid fa-trash'></i>";
deleteTask.setAttribute("class", "deleteItem");
listItem.appendChild(deleteTask);
deleteTask.addEventListener("click", () => removeFromArray(index)); //push index to remove from removeFromArray function and remove

if(tasks.completed){
    itemLabel.className = "completed";
} else{
    itemLabel.className = "";
};

itemLabel.style.userSelect = "none";
itemLabel.style.cursor = "pointer";
itemLabel.addEventListener("click", () => toggleCompleted(index)); //push index to toggleCompleted function and toggle 
});

taskCounter.innerHTML = todoList.getElementsByTagName("li").length;
completeCounter.innerHTML = "Completed tasks:" + todoList.getElementsByClassName("completed").length;
};

//Add task to the ToDo
function addTask() 
{
const newTask = inputText.value.trim(); //trim means delete empty space
if (newTask !== "")
{
   todoListArray.push({text: newTask, completed: false});  
} else {
   inputText.setAttribute("placeholder", "You have to type something!")  
};

refreshList();
inputText.value =""
};

function removeFromArray(index){
    todoListArray.pop(index);
    refreshList();
}

//to toggle complete status on list item
function toggleCompleted(index){
   todoListArray[index].completed = !todoListArray[index].completed;
   refreshList();
};

//clear entire array and ul
function clearTodoList() 
{
todoListArray.splice(0, todoListArray.length);
todoList.innerHTML="";
inputText.value ="";
taskCounter.innerHTML = todoList.getElementsByTagName("li").length;
};
