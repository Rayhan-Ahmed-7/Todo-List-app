//selector

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodoData = document.querySelector('.filter-todo');

//event listener
// document.addEventListener('DOMContentLoaded',reCreate);
document.addEventListener("DOMContentLoaded",redoTodo);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterTodoData.addEventListener('click',filterTodo);


function addTodo (e){
    e.preventDefault();
    if(todoInput.value == ""){
        return;
    }
    const todoDiv = document.createElement('div');
    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value;
    todoDiv.classList.add('newTodo');
    todoLi.classList.add('newItem');
    todoList.appendChild(todoDiv);
    todoDiv.appendChild(todoLi);
//Add todo list to local storage
    saveLocalTodo(todoInput.value);
    // saveLocalTodos(todoInput.value);
//COMPLETE BUTTON
    const completeButton = document.createElement('button');
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
//DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    todoInput.value = "";
    //THIS WAY IS GOOD BUT TO MUCH WORK :)
    // const trash = document.querySelectorAll('.delete-btn');
    // trash.forEach(element => {
    //     element.addEventListener('click',()=>{
    //         const todo = element.parentElement;
    //         todo.remove();
    //     })
    // });
}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        if(todo.classList[1] !== 'completed'){
            todo.classList.add('fall');
            // removeLocalTodo(todo);
            trashTodo(todo);
            todo.addEventListener('transitionend',()=>{
                todo.remove();
            })
            
        }
        
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "selected":
                if(todo.classList.contains('completed')){
                    todo.style.display ="flex";

                }else{
                    todo.style.display = "none";
                }
                break;
            case 'unselected':
                if(!todo.classList.contains('completed')){
                        todo.style.display ='flex';
    
                }else{
                        todo.style.display = 'none';
                }
                break;
         }
    });
}

// function saveLocalTodos(todo){
//     // first check do i have todos in my local storage if i do then do something with it
//     let todos;
//     if(localStorage.getItem("todos")===null){
//         todos =[];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.push(todo)
//     localStorage.setItem("todos", JSON.stringify(todos));
    
// }

// function reCreate(todo){
//     let todos;
//     if(localStorage.getItem("todos")===null){
//         todos =[];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.forEach((todo)=>{
//         const todoDiv = document.createElement('div');
//     const todoLi = document.createElement('li');
//     todoLi.innerText = todo;
//     todoDiv.classList.add('newTodo');
//     todoLi.classList.add('newItem');
//     todoList.appendChild(todoDiv);
//     todoDiv.appendChild(todoLi);
// // //Add todo list to local storage
// //     saveLocalTodos(todoInput.value);
// //COMPLETE BUTTON
//     const completeButton = document.createElement('button');
//     completeButton.innerHTML = `<i class="fas fa-check"></i>`;
//     completeButton.classList.add('complete-btn');
//     todoDiv.appendChild(completeButton);
// //DELETE BUTTON
//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
//     deleteButton.classList.add('delete-btn');
//     todoDiv.appendChild(deleteButton);
//     })
// }

//  function removeLocalTodo(todo){
// // first check do i have todos in my local storage if i do then do something with it
//     let todos;
//     if(localStorage.getItem("todos")===null){
//         todos =[];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     const todoIndex = todo.children[0].innerText;
//     console.log(todoIndex);
//     console.log(todo.children);
//     todos.splice(todos.indexOf(todoIndex),1);
//     //splice(at position,remove 1 item);
//     localStorage.setItem('todos',JSON.stringify(todos));

//  }

function saveLocalTodo(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function redoTodo(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    console.log(todos);
    todos.forEach(todo=>{
        const todoDiv = document.createElement('div');
    const todoLi = document.createElement('li');
    todoLi.innerText = todo;
    todoDiv.classList.add('newTodo');
    todoLi.classList.add('newItem');
    todoList.appendChild(todoDiv);
    todoDiv.appendChild(todoLi);
//COMPLETE BUTTON
    const completeButton = document.createElement('button');
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
//DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    })
}

function trashTodo(todo){
    let todos = JSON.parse(localStorage.getItem('todos'));
    todosText = todo.childNodes[0].innerText;
    console.log(todosText);
    todos.splice(todos.indexOf(todosText),1);
    console.log(todos);
    localStorage.setItem('todos',JSON.stringify(todos));
}