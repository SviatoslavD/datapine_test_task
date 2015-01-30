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
		if (angleAlpha < 35)
			angleAlpha = angleAlpha + 10;
			console.log(angleAlpha);
			$scope.highcharts3D.options.chart.options3d.alpha = angleAlpha;
	};

	// Zoom out view distance
	$scope.alphaDecrease = function () {
		if (angleAlpha > -15)
			angleAlpha = angleAlpha - 10;
			console.log(angleAlpha);
			$scope.highcharts3D.options.chart.options3d.alpha = angleAlpha;
	};

	// Zoom in view distance
	$scope.betaIncrease = function () {
		if (angleBeta < 45)
			angleBeta = angleBeta + 10;
			console.log(angleBeta);
			$scope.highcharts3D.options.chart.options3d.beta = angleBeta;
	};

	// Zoom out view distance
	$scope.betaDecrease = function () {
		if (angleBeta > -5)
			angleBeta = angleBeta - 10;
			console.log(angleBeta);
			$scope.highcharts3D.options.chart.options3d.beta = angleBeta;
	};

	// Add random Series
    $scope.addSeries = function () {
    	// For storing def. Data values
    	var data = [];
        //Create random Data values   
        for (var i = 0; i < 4; i++) {
            data.push(Math.floor(Math.random() * 20) + 1);
        };

		var rnd = {
			name: 'Random team',
			data: data,
			stack: 'Random project'
		};
        // Add data with random Series to chart
        $scope.highcharts3D.series.push(rnd);

        // Add random category
       	$scope.highcharts3D.xAxis.categories.push('Random ctg.');
       	console.log($scope.highcharts3D);

    };

});