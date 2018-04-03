(() => {
  'use strict';
  angular
  .module('csh-app')
  .service('loginService', loginService);

  loginService.$inject = ['$q', '$http', 'userService', 'sessionService'];

  function loginService($q, $http, userService, sessionService){

    let publicAPI = {
      logIn: _logIn,
      logOut: _logOut,
      isAuth: _isAuth,
      getAuthUser: _getAuthUser
    };
    return publicAPI;

    function _logIn(credentials){}

  }
})();
