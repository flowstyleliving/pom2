'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $httpProvider: ng.IHttpProvider,
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    }).state('Create Task', {
      url: '/create',
      templateUrl: 'templates/createTask.html',
      controller: 'TaskCreateController',
      controllerAs: 'vm'
    }).state('Update Task', {
      url: '/update/:id',
      templateUrl: 'templates/updateTask.html',
      controller: 'TaskUpdateController',
      controllerAs: 'vm'
    }).state('Details Task', {
      url: '/details/:id',
      templateUrl: '/templates/detailsTask.html',
      controller: 'TaskDetailsController',
      controllerAs: 'vm'
    }).state('Login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'UserLoginController',
      controllerAs: 'vm'
    }).state('Register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'UserRegisterController',
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthInterceptor');
  });
}
