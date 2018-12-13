define(function(){
    return function removeSpan (event) {
        
        var target = event.target;

        if(target.tagName != "SPAN") return
        var el = target.parentNode;   
        el.parentNode.removeChild(el)   
    }
});

