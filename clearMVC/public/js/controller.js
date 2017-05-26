(function(){
    
	var model = window.app.model;
    var Gallery = window.app.Gallery;
    var gallery = null;

    function bindFindFilm() {
        gallery.eventHolder.on( gallery.searchFilmEventName, (event, searchString) => {
            model.getData(searchString.searchString).then((data) => {
                initGallery(data.Search);
            });
        });
    }

    function bindEvents(){
        bindFindFilm();
    }
    
    function initGallery(data){
        gallery = new Gallery(data);
    }
    
    function init() {
        model.getData("star wars").then((data) => {
            initGallery(data.Search);
            bindEvents();
        });
    }
    init();
    
}())
