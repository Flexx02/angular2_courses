(function(){
    
	var model = window.app.model;
    var Gallery = window.app.Gallery;
    var gallery = null;
            
    /*function bindSave() {
        gallery.saveDefer.then((item) => {
            model.saveData(item);    
        });
    }*/

    function bindFindFilm() {
        gallery.eventHolder.on( gallery.searchFilmEventName, (event, searchString) => {
            model.getData(searchString.searchString).then((data) => {
                initGallery(data.Search);
            });
        });
    }
    
    function bindUpdate() {
        gallery.eventHolder.on( gallery.updateEventName, (event, item) => {
            model.updateData(item);
        });
    }
    
    function bindEvents(){
        //bindSave();  
        bindUpdate();
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
