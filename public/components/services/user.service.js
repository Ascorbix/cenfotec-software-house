(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .service('userService', userService);

  userService.$inject = ['$http', '$q', '$log'];

  function userService($http, $q, $log) {
    const userAPI = {
      addUser: _addUser,
      getUsers: _getUsers,
      changeRequestState: _changeStudentsState
    };
    return userAPI;

    function _addUser(pnewuser) {
      let response;

      let request = $.ajax({
        url: 'http://localhost:4000/api/save_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'role': pnewuser.role,
          'firstName': pnewuser.firstName,
          'secondName': pnewuser.secondName,
          'firstSurname': pnewuser.firstSurname,
          'secondSurname': pnewuser.secondSurname,
          'id': pnewuser.id,
          'email': pnewuser.email,
          'password': pnewuser.password,
          'photo': pnewuser.photo,
          'phone': pnewuser.phone,
          'state': pnewuser.state,
          'jobPosition': pnewuser.jobPosition,
          'specialty': pnewuser.specialty,
          'councilMember': pnewuser.councilMember,
          'birthDate': pnewuser.birthDate,
          'curriculum': pnewuser.curriculum,
          'carrer': pnewuser.carrer,
          'githubUser': pnewuser.githubUser,
          'website': pnewuser.website,
          'rejectReason': pnewuser.rejectReason
        }
      });

      request.done((res) => {
        response = res.success;
        console.log(res.error);
      });

      request.fail((error) => {
        response = error;
        console.log(response.error);
      });

      return response;
    }

    function _getUsers() {}

    function _changeStudentsState(pedituser) {}
  }
})();
