requirejs(["scripts/doneTask", "scripts/removeSpan"], function(doneTask, removeSpan) {

    var task = document.getElementById('input_text');
    var addBtn = document.getElementById('input_button');
    var ul = document.getElementById('toDoList');
    var clearBtm = document.getElementById('clearBtm');


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
    }

    ul.addEventListener ('click', removeSpan );
    ul.addEventListener ('click', doneTask );

    clearBtm.onclick = function() {
        ul.innerHTML = '';
    };
});

