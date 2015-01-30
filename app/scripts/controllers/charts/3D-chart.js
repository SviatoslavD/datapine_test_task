'use strict';

/**
 * # chart3dCtrl
 * Controller of the datapineTestTaskApp
 */

angular.module('datapineTestTaskApp').controller('chart3dCtrl', function ($scope, $http) {

	var angleAlpha = null;     // for storing alpha parameter
	var angleBeta = null;      // for storing beta parameter

	// Read 3D column chart data from JSON
	$http.get('charts-data.json')
	.success(function (data) {
		create3dChart(data.chart3D);
	})
	.error(function (data) {
		console.log('Request failed:' + data);
	});

	// Create 3D column chart
	function create3dChart (chartData) {
		$scope.highcharts3D = chartData;

		// Store alpha/beta values
		angleAlpha = $scope.highcharts3D.options.chart.options3d.alpha;
		angleBeta = $scope.highcharts3D.options.chart.options3d.beta;
	};

	// Zoom in view distance
	$scope.alphaIncrease = function () {
		angleAlpha = angleAlpha + 10;
		console.log(angleAlpha);
		$scope.highcharts3D.options.chart.options3d.alpha = angleAlpha;
	};

	// Zoom out view distance
	$scope.alphaDecrease = function () {
		angleAlpha = angleAlpha - 10;
		console.log(angleAlpha);
		$scope.highcharts3D.options.chart.options3d.alpha = angleAlpha;
	};

	// Zoom in view distance
	$scope.betaIncrease = function () {
		angleBeta = angleBeta + 10;
		console.log(angleBeta);
		$scope.highcharts3D.options.chart.options3d.beta = angleBeta;
	};

	// Zoom out view distance
	$scope.betaDecrease = function () {
		angleBeta = angleBeta - 10;
		console.log(angleBeta);
		$scope.highcharts3D.options.chart.options3d.beta = angleBeta;
	};

});