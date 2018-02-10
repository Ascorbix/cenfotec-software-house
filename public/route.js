(() => {
  'use strict';
  angular
  .module('cshRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS'])
  .config(appRoutes);

  appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appRoutes($stateProvider,$urlRouterProvider,$ocLazyLoad){
    $stateProvider

    .state('landingPage', {
      url: '/',
      templateUrl: './components/landing/landing.view.html',
      css: './components/landing/landing.style.css',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/landing/landing.controller.js')
        }]
      }
    })

    .state('404notfoud', {
      url: '/404',
      templateUrl: './components/notfound/notfound.view.html',
      css: './components/notfound/notfound.style.css'
    })

    .state('login', {
      url: '/login',
      templateUrl: './components/login/login.view.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/login/login.controller.js')
        }]
      },
      controller: 'loginController',
		  controllerAs: 'vm',
      css: './components/login/login.style.css'
    })

    .state('studentsRequest', {
      url: '/studentsRequest',
      templateUrl: './components/users/studentsRequest/studentRequest.view.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/users/studentsRequest/studentRequest.controller.js')
        }]
      },
      controller: 'studentRequestController',
		  controllerAs: 'vm',
      css: './components/users/studentsRequest/studentRequest.css'
    })

    .state('projectRequest', {
      url: '/projectRequest',
      templateUrl: './components/projects/projectRequest/projectRequest.view.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/projects/projectRequest/projectRequest.controller.js')
        }]
      },
      controller: 'projectRequestController',
		  controllerAs: 'vm',
      css: './components/projects/projectRequest/projectRequest.style.css'
    })

    if(status == '404'){
      $state.transitionTo('404notfoud');
    }

    $urlRouterProvider.otherwise('/');
  }
})();
