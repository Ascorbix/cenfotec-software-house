(() => {
  'use strict';
  angular
  .module('cshRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
  .config(appRoutes);

  appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appRoutes($stateProvider,$urlRouterProvider,$ocLazyLoad){
    $stateProvider

    .state('landingPage', {
      url: '/',
      templateUrl: './components/landing/landing.view.html',
      css: './components/landing/landing.style.css',
      data:{
        pageTitle: 'Cenfotec Software House'
      }
    })

    .state('404notfoud', {
      url: '/404',
      templateUrl: './components/notfound/notfound.view.html',
      css: './components/notfound/notfound.style.css',
      data:{
        pageTitle: 'Contenido no encontrado'
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: './components/login/login.view.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/login/login.controller.js')
        }]
      },
      data:{
        pageTitle: 'Inicio de sesion'
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
      data:{
        pageTitle: 'Solicitud de registro de estudiantes'
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
      data:{
        pageTitle: 'Solicitud de proyecto'
      },
      controller: 'projectRequestController',
		  controllerAs: 'vm',
      css: './components/projects/projectRequest/projectRequest.style.css'
    })

    if(status == '404'){
      $state.transitionTo('/404');
    }

    $urlRouterProvider.otherwise('/');
  }
})();
