(function () {
    angular.module('pokedex.directives', [])

    .directive('pokemonData', function ( ) {
     
                 return{
                          restrct : 'E'
                          ,templateUrl: 'partials/pokemon-data.html'
                 };
                 
    })

    .directive('pokemonStats',function(){
      
              return{
                      restrct : 'E'
                      ,templateUrl : 'partials/pokemon-stats.html'
              };
    })


    .directive('pokemonEvolution',function(){

                return{
                        restrct : 'E'
                        ,templateUrl : 'partials/pokemon-evolution.html'

                };

    })


    .directive('pokemonName',function(){

                return{
                        restrct : 'A'
                        ,templateUrl : 'partials/pokemon-name.html'

                };

    })


    .directive('pokemonComments',function(){

                return{
                        restrct : 'A'
                        ,templateUrl : 'partials/pokemon-comments.html'
                        ,controller: function () {

                                  this.comments = [];
                                  this.show     = false;
                                  this.comment  = {};


                                  this.anonymousChanged = function () {
                                      
                                      if ( this.comment.anonymous ) {

                                            this.comment.email = "";
                                      };

                                  }

                                  this.toggle = function () {

                                      this.show = !this.show;
                                  }

                                  this.addComment = function () {

                                      this.comment.date = Date.now();
                                      this.comments.push( this.comment );
                                      this.comment = {};
                                  }
                          
                          
                        }
                        ,controllerAs:'cmtsCtrl'

                };

    });

})();

