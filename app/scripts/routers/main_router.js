'use strict';

/**
 * # Main router
 * Roter of the datapineTestTaskApp
 */

angular.module('datapineTestTaskApp').config(function ($stateProvider, $urlRouterProvider) {
      
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'MainCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .state('barchart', {
          url: '/barchart',
          templateUrl: 'views/charts/bar-chart.html',
          controller: 'BarchartCtrl'
        })
        .state('piechart', {
          url: '/piechart',
          templateUrl: 'views/charts/pie-chart.html',
          controller: 'PiechartCtrl'
        })
        .state('chart3d', {
          url: '/3dchart',
          templateUrl: 'views/charts/3D-chart.html',
          controller: 'chart3dCtrl'
        })
        .state('areachart', {
          url: '/areachart',
          templateUrl: 'views/charts/area-chart.html',
          controller: 'AreaChartCtrl'
        })
});