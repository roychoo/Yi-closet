angular.module('services', []).provider('indexeddbService', function() {
   /*
    var indexeddbService = function() {
    	var indexedDB = window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;
    	return {
    		init: function(){
    			console.log('hello world');
    		},
    		 $get: function(magicNumber) {
			    // if no magic number was configured
			    if (!this.magicNumber) {
			      // use the one configured with "constant(name, value)" as a fallback
			      this.magicNumber = magicNumber;
			    }
			 
			    // return the service instance
			    return {
			      getMagicNumber: function() {
			        return this.magicNumber;
			      }
			    };
			  }
    	}
    }
   
    return indexeddbService;*/
    this.name = "default";
     this.$get = function() {
        var name = this.name;
        return {
            sayHello: function() {
                return "Hello, " + name + "!"
            }
        }
    };
    this.setName = function(name){
    	console.log("hello");
    }

});