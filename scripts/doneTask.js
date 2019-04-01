define(function(){
  return function doneTask(event) {   
    var target = event.target;
    target.classList.toggle('checked');   
  };
});
