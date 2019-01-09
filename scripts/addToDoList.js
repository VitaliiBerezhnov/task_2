
define(function(require){

    var removeSpan = require('scripts/removeSpan')
    var doneTask = require('scripts/doneTask')

    return function addToDoList(node){

        var clearList = node.querySelector('#clearList');
        clearList.onclick = function(){ 
            var allToDo = document.getElementById('allToDo'); 
            allToDo.removeChild(node) 
        };
            
        var task = node.querySelector('#input_text');
        var ul = node.querySelector('#toDoList');


        var addBtn = node.querySelector('#input_button');
        addBtn.onclick = function() {
            if(!task.value) return;

            var li = document.createElement('li');
            var textTask = document.createTextNode(task.value)

            var span = document.createElement('span')
            var text = document.createTextNode('\u2715')

            span.className = 'close';
            span.appendChild(text);

            li.appendChild(textTask);
            li.appendChild(span);
            ul.appendChild(li);  

            task.value = '';
            task.focus();   
        }

        ul.addEventListener ('click', removeSpan );
        ul.addEventListener ('click', doneTask );
        ul.innerHTML = '';

        var clearBtm = node.querySelector('#clearBtm');
        clearBtm.onclick = function() {
            ul.innerHTML = '';
        };
            
            
        var nameTask = node.querySelector('#nameTask');  
        nameTask.focus();         
            
    };
});
