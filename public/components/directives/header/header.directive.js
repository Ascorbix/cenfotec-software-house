(() => {
  'use strict';
  angular
  .module('csh-app')
  .directive('hearderPrincipal', hearderPrincipal);

  function hearderPrincipal() {

    let header = {
      templateUrl: '/components/directives/header/header.view.html',
      restrict: 'EA'
    }

    return header;
  }
})();
