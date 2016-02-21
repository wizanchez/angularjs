(function () {
    angular.module('pokedex.filters', [])
   /**
   * controller PokemonController
   */

  .filter('imageify', function () {
			    return function (input) {
			      var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
			      return url;
			    };
  });


})();
