define(function(){
    
 function Plus(){
    this._p = document.createElement('p');
    // this._p.innerHTML = "text";

 };

 Plus.prototype.create = function(text){
    this._p.innerHTML = text;
 };

 return Plus;

});