define(function(){
  return function removeSpan (event) {       
    var target = event.target;
    var el = target.parentNode;   
    el.parentNode.removeChild(el);   
  };
});

