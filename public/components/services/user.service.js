(() => {
  'use strict';
  angular
  .module('csh-app')
  .service('userService', userService);

  userService.$inject = ['$q', '$log', '$http']

  function userService($q, $log, $http){

    const asyncLocalStorage = {
      setItem: function (key, value) {
        return Promise.resolve().then(() => {
            let response = true;
            localStorage.setItem(key, JSON.stringify(value));
            return response
        });
      }
    };

    let publicAPI  = {
      getUsers : _getUsers,
      setUsers : _setUsers
    }
    return publicAPI;

    function _getUsers(){
      let allUsers = [],

        userListLS = JSON.parse(localStorage.getItem('listaUsuariosLS'));

      if (userListLS == null) {
        return allUsers;
      } else {
        userListLS.forEach(obj => {
          let objTempUser = new User()

          allUsers.push(objUsuarioTemp);
        });
      }
      return allUsers;
    }
  };
})();
