'use strict';
(function() {

    function Gallery (items) {        
        this.DOMElements = {
            filmContainer       : document.querySelector("#filmContainer"),
            filmSearch          : document.querySelector("#filmSearch"),
            saveBtn             : document.querySelector("#saveBtn"),
            refreshBtn          : document.querySelector("#refreshBtn")
        };

        //this.saveDefer = $.Deferred();
        this.items = items;
        this.counter = 0;
        this.searchString = "star wars";

        this.eventHolder = $({});
        this.updateEventName = "update";
        this.searchFilmEventName = "search";
        this.init();
    }
    
    Gallery.prototype = {
        
        init : function () {
            this.buildGallery();
            this.initListeners();
        },
        
        buildGallery : function () {
            var self = this;

            while(this.DOMElements.filmContainer.firstChild){
                this.DOMElements.filmContainer.removeChild(this.DOMElements.filmContainer.firstChild);
            }
            this.items.forEach( function (element) {
                self.DOMElements.filmContainer.appendChild(self.buildFilmBlock(element));
            });

            console.log("Gallery is ready");
        },

        buildFilmBlock: function (filmData) {

            var block = document.createElement('div');
            var thumbnail = document.createElement('div');
            var caption = document.createElement('div');
            var title = document.createElement('h3');
            var type = document.createElement('p');
            var year = document.createElement('p');

            title.innerHTML = filmData.Title;
            type.innerHTML = filmData.Type;
            year.innerHTML = filmData.Year;

            block.className = "col-sm-6 col-md-4";
            thumbnail.className = "thumbnail";
            caption.className = "caption";

            var img = new Image();
            img.src = filmData.Poster;

            block.appendChild(thumbnail);
            thumbnail.appendChild(img);
            thumbnail.appendChild(caption);
            caption.appendChild(title);
            caption.appendChild(type);
            caption.appendChild(year);

            return block;
        },

        initListeners : function () {
            
            /*this.DOMElements.saveBtn.addEventListener("click", () => {
                let item = this.items[0];
                item.name = "New name";
                this.saveDefer.resolve(item);
            });*/

            this.DOMElements.filmSearch.addEventListener("change", (e) => {
                this.eventHolder.trigger( this.searchFilmEventName , [{searchString: this.DOMElements.filmSearch.value}]);
                // let item = this.items[0];
                // item.name = "New name";
                // this.saveDefer.resolve(item);
            });

            this.DOMElements.refreshBtn.addEventListener("click", () => {
                this.eventHolder.trigger( this.updateEventName , [{counter: this.counter++}]);
            });
        } 

    }
    
    window.app = window.app || {};
    window.app.Gallery = Gallery;
    
}());
