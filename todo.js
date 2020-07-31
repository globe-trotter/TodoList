const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

function addTodo(event){
    event.preventDefault();
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");

    todoDiv.append(newTodo);

    const completedButton = document.createElement('button'); 
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button'); 
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value='';
}
function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]=='trash-btn'){
        item.parentElement.classList.add('fall');
        item.parentElement.addEventListener('transitionend',function(){
            item.parentElement.remove();
        });
    }
    else if(item.classList[0]=='complete-btn'){
        item.parentElement.classList.toggle('completed');
    }
}