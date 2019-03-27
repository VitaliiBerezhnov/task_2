define(function() {
   
   function ActionItem (option) {

        this.title = option.title;
        this.description = option.description;
        this.create = function(node) {

            var li = document.createElement('li');
            var textTask = document.createTextNode(this.title);

            var desc = document.createElement('p');
            var textDesk = document.createTextNode(this.description);
            
            var span = document.createElement('span');
            var text = document.createTextNode('\u2715');

            desc.appendChild(textDesk);
            desc.className = 'desc';
            span.className = 'close';
            li.className = 'shadow';
            span.appendChild(text);

            li.appendChild(textTask);
            li.appendChild(desc);

            if(this.image) {
                var img = document.createElement('img');
                img.src = this.image
                img.className = 'toDoImg';
                li.appendChild(img);
            };

            li.appendChild(span);
            node.appendChild(li);
            
            span.addEventListener ('click', this._remove );
            li.addEventListener ('click', this._done );
        };

        this._remove = function(event) {
            var target = event.target;
            var el = target.parentNode;   
            el.parentNode.removeChild(el);
        };

        this._done = function(event) {
            var target = event.target;
            target.classList.toggle("checked");
        };
    };

    function ImageItem(option) {
        
        ActionItem.apply(this, arguments)

        this.image = option.image;
        this._remove = function(event){
            var target = event.target;
            var el = target.parentNode;   
            target.parentNode.parentNode.removeChild(el);
        };
    };

    return function ItemFactory(option) {
        
        if (!option.image){
            return new ActionItem(option)
        }else{
            return new ImageItem(option)       
        };
    };
});