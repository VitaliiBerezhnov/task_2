var task = document.getElementById('input_text');
var addBtn = document.getElementById('input_button');
var ul = document.getElementById('toDoList');
var clearBtm = document.getElementById('clearBtm');

addBtn.onclick = function(){
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

ul.addEventListener ('click', removeSpan )
ul.addEventListener ('click', doneTask )

function doneTask(event){
    var target = event.target;
    if(target.tagName != "LI") return
    target.classList.toggle("checked");

}
function removeSpan(event){

    var target = event.target;
    if(target.tagName != "SPAN") return
    var el = target.parentNode;   
    el.parentNode.removeChild(el)
}

clearBtm.onclick = function(){
    ul.innerHTML = '';

}