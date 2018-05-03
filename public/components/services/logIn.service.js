(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .service('logInService', logInService);

  logInService.$inject = ['AUTH_EVENTS', 'USER_ROLES']

  function logInService(AUTH_EVENTS, USER_ROLES) {
    const loginAPI = {
      logIn: _logIn,
      logOut: _logOut,
      getAuthUser: _getAuthUser
    };
    return loginAPI;

    function _logIn(pcredentials) {
      let response ,
          condition ;
      let request = $.ajax({
        url: 'http://localhost:4000/api/login',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'email' : pcredentials.email,
          'password' : pcredentials.password
        }
      });
      request.done((res) => {
        response = res.condition;
        console.log(res);
      });

      request.fail((error) => {
        response = error;
        console.log(response.error);
      });

      return response;
    }

    function _logOut(){}

    function _getAuthUser(){};
  }
})();
