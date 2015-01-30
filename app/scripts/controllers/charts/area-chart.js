'use strict';

/**
 * # AreachartCtrl
 * Controller of the datapineTestTaskApp
 */

angular.module('datapineTestTaskApp').controller('AreaChartCtrl', function ($scope, $http) {

	// Read Area chart data from JSON
	$http.get('charts-data.json')
	.success(function (data) {
		createAreaChart (data.areaChart);
	})
	.error(function (data) {
		console.log('Request failed:' + data);
	});

	// Create Area chart
	function createAreaChart (chartData) {

		$scope.highchartsArea = chartData;
		// For storing random data value
		var rnd = [];  

		// Generate random "data" values for the two "Series" 
		for (var k = 0; k < 2; k++) {
			for (var i = 0; i < 35; i++) {
				rnd.push(Math.floor(Math.random() * 1000) + 1);
			};

			// Add random "data" to k-"Series"
			$scope.highchartsArea.series[k].data = rnd;
			
			// Clear random value, before the next cycle
			rnd = [];
		};
	};

	// Swap chart type
	$scope.swapChartType = function () {
		if($scope.highchartsArea.options.chart.type === 'area') {

			// Configure 3D column chart
			$scope.highchartsArea.options.chart = {
				type: 'column',
            	margin: 75,
            	options3d: {
	                enabled: true,
	                alpha: 10,
	                beta: 25,
	                depth: 70
            	}	
			};

			$scope.highchartsArea.options.plotOptions = {
				column: {
                	depth: 25
            	}
			};

			$scope.highchartsArea.yAxis = {
				opposite: true
			};	

		} else {

			// Discard 3D column configuration
			$scope.highchartsArea.options.chart = {
				type: 'area'
			};

			$scope.highchartsArea.options.plotOptions = {
				area: {
	                pointStart: 0,
	                marker: {
	                    enabled: false,
	                    symbol: 'circle',
	                    radius: 2,
	                    states: {
	                        hover: {
	                            enabled: true
	                        }
	                    }
	                }
	            }
			};

			$scope.highchartsArea.yAxis = {
				title: {
                	text: 'Random values'
            	}
			};			
		}
	};

	// Add random series
	$scope.addSeries = function () {
		// For storing random data value
		var rnd = [];  
		// Generate random "data" values for the two "Series" 
			for (var i = 0; i < 35; i++) {
				rnd.push(Math.floor(Math.random() * 1000) + 1);
			};

			// Add random "data" to k-"Series"
			$scope.highchartsArea.series.push({
				name: 'Random series',
				data: rnd
			});

	};

});
