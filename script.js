/*
Uppgiften/frågor:
Todo-appen ska ha styling som motsvarar det som visas i den bifogade videon, avseende färger, mått, typografi, etc.
     Innan själva huvudfrågan... Vilken font är det du använder i exemplet så man kan ändra till den fonten?
     
     Fråga: Hur nära i utseendet i videon måste man vara? Frågar mest för jag kan gärna i bästa möjliga utsträckning visa att jag kan och vill lära mig utefter hur ni instruerar.
     Men med det sagt så har jag redan stylat min lista utefter hur jag själv ville ha den :) och jag frågar mest eftersom listan rent designmässigt är hur jag vill ha det och desto
     mer jag ändrar för att få den att likna exemplet desto mer kommer jag behöva ta bort sen när jag fått betyget. Undrar om det finns någon lösning här där jag kan demonstrera att
     jag kan det ni vill utan att ändra för mycket?

När man kommer in på sidan ska hela sidan animeras enligt videofilen: flyga ner uppifrån och fade in
     Denna delen är klar

När man lägger till nya punkter i listan genom att skriva in dem och klicka på OK ska de animeras in enligt videofilen: fade-in och glidning uppåt

    Fråga: Går detta att lösa med hur jag i grunden har programmerat min toDo lista? I och med att jag för att skapa li elementen har gjort en form av refresh funktion som
    tar hela min array och skapar li element av objekten i min array så leder detta till att "fade-in och glidning uppåt" animationen appliceras på varje item i min UL varje
    gång refresh funktionen kallas. Vill gärna bli pekad i rätt riktning på vad jag ska googla efter för att hitta en lösning?

När man klickar på en punkt för att markera den som klar ska den animeras enligt videofilen: Fade till grå

     Denna delen är klar

Om man försöker lägga till en tom punkt ska felmeddelandet animeras enligt videofilen: Blinka rött

     Denna delen är klar
*/

/*
Notes to future me:

Practice more with arrays and how it works with index push.
Learn about $ and how that works.

If i was to do this project again from scratch then maybe look into dividing functionality.
This in order not have to have a big refreshList function and create the HTML ul from scratch everytime i add or remove items.
*/

const inputText = document.querySelector("#inputForm");
const placeHolder = document.querySelector("#placeholder")
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
   placeHolder.classList.add("placeholder-flash");
   setTimeout(() => {placeHolder.classList.remove("placeholder-flash")}, 1000);      
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
