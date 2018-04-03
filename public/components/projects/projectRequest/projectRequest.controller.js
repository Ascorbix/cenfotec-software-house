(() => {
  'use strict';
  angular
  .module('csh-app')
  .controller('projectRequestController', projectRequestController);

  projectRequestController.$inject = ['projectService'];

  function projectRequestController(projectService){}
})();
