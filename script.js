const inputText = document.querySelector("#inputForm");
const submitBtn = document.querySelector("#submitButton");
const clearTodo = document.querySelector("#clearList")
const taskCounter = document.querySelector("#counterText");
const todoList = document.querySelector("#todoList");
let todoListArray = [];

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
//listItem.textContent = tasks.text;
const itemLabel = document.createElement("span");
itemLabel.textContent = tasks.text;
todoList.appendChild(listItem);
itemLabel.innerText = tasks.text;
listItem.appendChild(itemLabel);

if(tasks.complete){
    listItem.className = "completed";
}

taskCounter.innerHTML = todoList.getElementsByTagName("li").length;
})
}

function addTask() 
{
const newTask = inputText.value.trim(); //trim means delete empty space
if (newTask !== "")
{
   todoListArray.push({text: newTask, completed: false});  
};
refreshList();
inputText.value =""
};

//to toggle complete status on list item
function toggleCompleted(index){

}

//clear entire array and ul
function clearTodoList() 
{
todoListArray = [];
todoList.innerHTML="";
inputText.value ="";
taskCounter.innerHTML = todoList.getElementsByTagName("li").length;
}



/* add item to list without array
function addItemToList() {
    let text = inputText.value;
    
    if(text.length == 0){return} //if nothing has been typed

    const listItem = document.createElement("li"); //to create new list item
    todoList.appendChild(listItem);
    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    listItem.appendChild(itemLabel);
    inputText.value= ""; //clear input field
    
    //add event listener to items in list
    itemLabel. addEventListener("click", 
        function(addRemoveLine){})

    taskCounter.innerHTML = todoList.getElementsByTagName("li").length;
}
*/

  
    


//för att göra en item completed ska man byta klass på den till en klass som är stylad som completed