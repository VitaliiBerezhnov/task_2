define(function(require) {

  var ItemFactory = require('scripts/ItemFactori');
    
  return function addToDoList(node) {

    function selector(node, text) {
      return node.querySelector(text);
    }

    var clearList = selector(node, '#clearList')
    var task = selector(node, '#input_text');
    var ul = selector(node, '#toDoList');
    var description = selector(node, '#desc');
    var img = selector(node, '#forImg');
    var clearBtm = selector(node, '#clearBtm');
    var nameTask = selector(node, '#nameTask'); 
    var addBtn = selector(node, '#input_button');

    addBtn.onclick = function() {
      if(!task.value || !description.value) return;

      var item = ItemFactory({
        title: task.value,
        description: description.value,
        image: img.value
      });
            
      item.create(ul)

      description.value ='';
      task.value = '';
      img.value = '';
      task.focus();   
    };
              
    clearBtm.onclick = function() {
      ul.innerHTML = '';
    };

    clearList.onclick = function() { 
      var allToDo = selector(document, '#allToDo'); 
      allToDo.removeChild(node) 
    };

    ul.innerHTML = '';                                 
    nameTask.focus();              
  };
});
