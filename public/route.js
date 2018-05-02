(() => {
  'use strict'
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);

  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data: {
          pageTitle: 'Cenfotec Software House'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/landingPage/landingPage.controller.js');
          }]
        },
        controller: 'landingPageController',
        controllerAs: 'vm'
      })

      .state('iniciarSesion', {
        url: '/logIn',
        templateUrl: './components/logIn/logIn.view.html',
        data: {
          pageTitle: 'Cenfotec Software House | Iniciar Sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/logIn/logIn.controller.js');
          }]
        },
        controller: 'logInController',
        controllerAs: 'vm'
      })

    $urlRouterProvider.otherwise('/');
  }
})();
