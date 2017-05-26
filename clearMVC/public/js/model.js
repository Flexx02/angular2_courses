'use strict';
(function(){
    
    var model = function() {

        function getData(filmName) {
            console.log(filmName);
            return $.get( "http://www.omdbapi.com/?page=1&s=" + filmName)
        }

        return {
            getData : getData
        }
    };
    
    window.app = window.app || {};
    window.app.model = model();


    
}());
