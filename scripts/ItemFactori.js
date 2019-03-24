define(function(){
   
   function ActionItem (option){

        this.title = option.title;
        this.description = option.description;
        this.create = function(node){

            var li = document.createElement('li');
            var textTask = document.createTextNode(this.title);

            var desc = document.createElement('p');
            var textDesk = document.createTextNode(this.description);
            
            var span = document.createElement('span');
            var text = document.createTextNode('\u2715');

            desc.appendChild(textDesk);
            span.className = 'close';
            span.appendChild(text);

            li.appendChild(textTask);
            li.appendChild(desc);
            li.appendChild(span);
            node.appendChild(li);
            
            span.addEventListener ('click', this._remove );
            li.addEventListener ('click', this._done );


        };

        this._remove = function(event){
            var target = event.target;
            var el = target.parentNode;   
            el.parentNode.removeChild(el);
        };

        this._done = function(event){
            var target = event.target;
            target.classList.toggle("checked");
        };
    };

    function ImageItem(option) {

        this.image = option.image;
        this.create = function(node){

            var li = document.createElement('li');
            var img = document.createElement('img');
            var span = document.createElement('span');
            var text = document.createTextNode('\u2715');

            span.className = 'close';
            span.appendChild(text);

            img.src = this.image
            li.appendChild(span);
            li.appendChild(img);
            node.appendChild(li);

            span.addEventListener ('click', this._remove );

        };
    };

    ImageItem.prototype = ActionItem;

    return function ItemFactory(option) {
        
        if (!option.image){
           return new ActionItem(option)
        }else{
            return new ImageItem(option)       
        };
    }
});