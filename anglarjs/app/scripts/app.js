'use strict';

/**
 * @ngdoc overview
 * @name anglarjsApp
 * @description
 * # anglarjsApp
 *
 * Main module of the application.
 */
angular
  .module('anglarjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ytt', {
        templateUrl: 'views/ytt.html',
        controller: 'YttCtrl',
        controllerAs: 'ytt'
      })
      .when('/simpleForm', {
        templateUrl: 'views/simpleform.html',
        controller: 'SimpleformCtrl',
        controllerAs: 'simpleForm'
      })
      .when('/usingCss', {
        templateUrl: 'views/usingcss.html',
        controller: 'UsingcssCtrl',
        controllerAs: 'usingCss'
      })
      .when('/bindingForm', {
        templateUrl: 'views/bindingform.html',
        controller: 'BindingformCtrl',
        controllerAs: 'bindingForm'
      })
      .when('/triggersForm', {
        templateUrl: 'views/triggersform.html',
        controller: 'TriggersformCtrl',
        controllerAs: 'triggersForm'
      })
      .when('/nonimmediateForm', {
        templateUrl: 'views/nonimmediateform.html',
        controller: 'NonimmediateformCtrl',
        controllerAs: 'nonimmediateForm'
      })
      .when('/ValidationForm', {
        templateUrl: 'views/validationform.html',
        controller: 'ValidationformCtrl',
        controllerAs: 'ValidationForm'
      })
      .when('/ModifyingForm', {
        templateUrl: 'views/modifyingform.html',
        controller: 'ModifyingformCtrl',
        controllerAs: 'ModifyingForm'
      })
      .when('/FormControls', {
        templateUrl: 'views/formcontrols.html',
        controller: 'FormcontrolsCtrl',
        controllerAs: 'FormControls'
      })
      .when('/ControllersFilters', {
        templateUrl: 'views/controllersfilters.html',
        controller: 'ControllersfiltersCtrl',
        controllerAs: 'ControllersFilters'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
