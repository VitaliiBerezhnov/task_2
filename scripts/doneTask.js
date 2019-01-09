define(function(){
    return function doneTask(event) {
        
        var target = event.target;

        if(target.tagName != "LI") return
        target.classList.toggle("checked");   
    };
});
