(function () {
  var app = angular.module('pokedex', [
                                         'ngRoute'
                                        ,'pokedex.controllers'
                                        ,'pokedex.directives'
                                        ,'pokedex.filters'
    ]);



  /**
   * tiop de servicio proveedor
   */
   app.config(['$routeProvider',function( $routeProvider ){

          $routeProvider 

          .when('/',{

              templateUrl: 'views/pokemon.html'
              ,controller: 'PokemonController'
              ,controllerAS: 'cmtsCtrl'
          })

   }]);



})();
