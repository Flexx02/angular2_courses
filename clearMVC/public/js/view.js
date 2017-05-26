'use strict';
(function() {

    function Gallery (items) {
        this.DOMElements = {
            filmContainer       : document.querySelector("#filmContainer"),
            filmSearch          : document.querySelector("#filmSearch"),
            saveBtn             : document.querySelector("#saveBtn"),
            refreshBtn          : document.querySelector("#refreshBtn")
        };

        this.items = items;
        this.searchString = "star wars";

        this.eventHolder = $({});
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
            var filmsList = document.createElement('div');
            filmsList.className = 'container';
            this.DOMElements.filmContainer.removeChild(this.DOMElements.filmContainer.firstChild);
            //
            this.items.forEach( function (element) {
                filmsList.appendChild(self.buildFilmBlock(element));
            });
            self.DOMElements.filmContainer.appendChild(filmsList);
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
            this.DOMElements.filmSearch.addEventListener("change", (e) => {
                this.eventHolder.trigger( this.searchFilmEventName , [{searchString: this.DOMElements.filmSearch.value}]);
            });
        }
    };
    window.app = window.app || {};
    window.app.Gallery = Gallery;
}());
