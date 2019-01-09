requirejs(["scripts/addToDoList"], function(addToDoList){

    var addToDo = document.getElementById('addToDo');
    var allToDo = document.getElementById('allToDo');
    var toDo = document.getElementById('toDo');

    addToDoList(toDo);

    addToDo.onclick = function(){
        var newTask = toDo.cloneNode(true);
        allToDo.appendChild(newTask)
        addToDoList(newTask)
    };   
});


