const inputText = document.querySelector("#inputForm");
const submitBtn = document.querySelector("#submitButton");
const clearTodo = document.querySelector("#clearList")
const taskCounter = document.querySelector("#counterText");
const todoList = document.querySelector("#todoList");
const todoListArray = ["test1", "test2", "test3"];

taskCounter.innerHTML = todoList.getElementsByTagName("li").length;

//klick to add item
submitBtn.addEventListener("click", addTask);
clearTodo.addEventListener("click", displayAllTasks);

//press enter to add item
inputText.addEventListener("keydown", 
    function (event)
    {
    if (event.key === "Enter"){
    event.preventDefault();
    addTask();
    }
    });


//clear list
clearTodo.addEventListener("click", clearTodoList);

//Functions

function displayAllTasks() 
{
todoListArray.forEach((item, index) => {
const listItem = document.createElement("li");
todoList.appendChild(listItem);
const itemLabel = document.createElement("span");
itemLabel.innerText = item;
listItem.appendChild(itemLabel);
taskCounter.innerHTML = todoList.getElementsByTagName("li").length;
})
}

function addTask() 
{
const newTask = inputText.value.trim(); //trim means delete empty space
if (newTask !== "")
{
   todoListArray.push({listItem: newTask, completed: false})
};
inputText.value =""
};


function clearTodoList() {
//clear list
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


