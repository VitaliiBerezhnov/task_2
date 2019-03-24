define(function(require){

    var ItemFactory = require('scripts/ItemFactori');
    
    return function addToDoList(node){

        var clearList = node.querySelector('#clearList');
        clearList.onclick = function(){ 
            var allToDo = document.getElementById('allToDo'); 
            allToDo.removeChild(node) 
        };
            
        var task = node.querySelector('#input_text');
        var ul = node.querySelector('#toDoList');
        var description = node.querySelector('#desc')
        var img = node.querySelector('#forImg')

        var addBtn = node.querySelector('#input_button');

        addBtn.onclick = function() {
            if(!task.value || !description.value) return;

            var item = ItemFactory({
                title: task.value,
                description: description.value,
                image: img.value

            });
            
            item.create(ul)

            task.value = '';
            task.focus();   
        };

        ul.innerHTML = '';

        var clearBtm = node.querySelector('#clearBtm');
        clearBtm.onclick = function() {
            ul.innerHTML = '';
        };
                        
        var nameTask = node.querySelector('#nameTask');  
        nameTask.focus();              
    };
});
