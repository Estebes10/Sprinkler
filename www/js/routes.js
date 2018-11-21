angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('riego', {
    url: '/page2',
    templateUrl: 'templates/riego.html',
    controller: 'riegoCtrl'
  })

  .state('riegoHr', {
    url: '/page3',
    templateUrl: 'templates/riegoHr.html',
    controller: 'riegoHrCtrl'
  })

  .state('riegoHum', {
    url: '/page4',
    templateUrl: 'templates/riegoHum.html',
    controller: 'riegoHumCtrl'
  })

  .state('regarAhora', {
    url: '/page5',
    templateUrl: 'templates/regarAhora.html',
    controller: 'regarAhoraCtrl'
  })

  .state('lOG', {
    url: '/page6',
    templateUrl: 'templates/lOG.html',
    controller: 'lOGCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});