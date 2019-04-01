requirejs(['scripts/addToDoList'], (addToDoList) => {
  const addToDo = document.getElementById('addToDo');
  const allToDo = document.getElementById('allToDo');
  const toDo = document.getElementById('toDo');

  addToDoList(toDo);

  addToDo.onclick = () => {
    const newTask = toDo.cloneNode(true);
    allToDo.appendChild(newTask);
    addToDoList(newTask);
  };   
});


