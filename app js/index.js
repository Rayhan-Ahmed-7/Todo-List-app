// const collection = document.getElementsByClassName('item');
// console.log(collection);
// const todoList = document.getElementById('todo-list');
// const Length = document.getElementsByClassName("length")[0];

// const newItem = document.createElement('li');
// newItem.classList.add('item');
// newItem.innerHTML="item3";
// todoList.appendChild(newItem);
// console.log(collection);
// Length.innerText=collection.length;

//const nodeList = document.querySelectorAll('.item');

// const todoList = document.querySelector('#todo-list');
// const nodeList =todoList.children;
// console.log(nodeList);
// const Length = document.querySelectorAll(".length")[0];
// const newItem = document.createElement('li');
// newItem.classList.add('item');
// newItem.innerHTML="item3";
// todoList.appendChild(newItem);
// console.log(nodeList);
// Length.innerHTML=nodeList.length;

const todoList = document.querySelector('#todo-list');
const nodeList =todoList.children;
const Length = document.querySelector(".length");
const button = document.querySelector('button');

button.addEventListener('click',function(){
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerHTML=`item ${nodeList.length + 1}`;
    todoList.appendChild(newItem);
    Length.innerHTML = `Node List Length: ${nodeList.length}`;
    for(node of nodeList){
        node.addEventListener('click',(e)=>{
            e.stopPropagation();//this helps to prevent event bubling
            e.target.remove();
        });
    }
});
todoList.addEventListener('click',()=>{
    todoList.classList.toggle('fade');
})
