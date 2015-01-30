'use strict';

/**
 * # BarchartCtrl
 * Controller of the datapineTestTaskApp
 */

 angular.module('datapineTestTaskApp').controller('BarchartCtrl', function ($scope, $http) {

        // Read Bar chart data from JSON file
        $http.get('charts-data.json')
        .success(function (data) {
            createBarChart(data.barChart);
        })
        .error(function (data) {
            console.log( 'Request failed:' + data);
        });
        
        // Create Bar chart
        function createBarChart (chartData) {
            $scope.highchartsBar = chartData;
        };

        // Add random Series
        $scope.addSeries = function () {
            // def. array for storing random Series
            var rnd = [];
            //Create random Series        
            for (var i = 0; i < 6; i++) {
                rnd.push(Math.floor(Math.random() * 20) + 1);
            };

            // Add data with random Series to chart
            $scope.highchartsBar.series.push({
                data: rnd
            });

        };

        // Remove random Series
        $scope.removeRandomSeries = function () {
            var seriesArray = $scope.highchartsBar.series;
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray.splice(rndIdx, 1);
        };

        // Chart type Line (used for switching)
        $scope.options = {
            type: 'line'
        };

        // Switch between charts types
        $scope.swapChartType = function () {
            if ($scope.highchartsBar.options.chart.type === 'line') {
                $scope.highchartsBar.options.chart.type = 'bar'
            } else {
                $scope.highchartsBar.options.chart.type = 'line'
            }
        };

 });