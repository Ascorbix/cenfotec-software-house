(() => {
  'use strict';
  angular
    .module('cenfotec-software-house')
    .controller('studentRequestController', studentRequestController);

  studentRequestController.$inject = ['imageUploadService', 'userService'];

  function studentRequestController(imageUploadService, userService) {
    const vm = this;

    vm.newStudent = {
      state: 'postulate',
      role: 'student',
      password: randomPassword()
    };

    vm.sendRequest = (pnewUser) => {
      let tempStudent = Object.assign(new Student(), pnewUser);
      console.log(tempStudent);

      let success = userService.addUser(tempStudent);

      console.log(success);
    }

    function randomPassword() {
      let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*-+<>ABCDEFGHIJKLMNOP1234567890",
          password = '';
      for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * chars.length);
        password += chars.charAt(x);
      }
      return password;
    }
  }
})();
