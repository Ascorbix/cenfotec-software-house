(() => {
  'use strict';
  angular
  .module('csh-app')
  .controller('carrersController', carrersController);

  carrersController.$inject = ['carrerService'];

  function carrersController(carrerService) {};
})();
