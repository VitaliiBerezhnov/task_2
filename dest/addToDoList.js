'use strict';define(function(e){var l=e('scripts/ItemFactori');return function(e){function t(e,t){return e.querySelector(t)}var n=t(e,'#clearList'),c=t(e,'#input_text'),i=t(e,'#toDoList'),u=t(e,'#desc'),o=t(e,'#forImg'),r=t(e,'#clearBtm'),a=t(e,'#nameTask');t(e,'#input_button').onclick=function(){c.value&&u.value&&(l({title:c.value,description:u.value,image:o.value}).create(i),u.value='',c.value='',o.value='',c.focus())},r.onclick=function(){i.innerHTML=''},n.onclick=function(){t(document,'#allToDo').removeChild(e)},i.innerHTML='',a.focus()}});