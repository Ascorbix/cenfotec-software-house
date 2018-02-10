(() => {
  'use strict';
  angular
  .module('csh-app')
  .controller('studentRequestController', studentRequestController);

  studentRequestController.$inject = ['userService']

  function studentRequestController(userService){}
})();
