'use strict';

/**
 * # PiechartCtrl
 * Controller of the datapineTestTaskApp
 */

angular.module('datapineTestTaskApp').controller('PiechartCtrl', function ($scope, $http) {

    // Read Pie chart data from JSON
    $http.get('charts-data.json')
    .success(function (data) {
        createPieChart(data.pieChart);
    })
    .error(function (data) {
        console.log('Request failed:' + data);
    });

    // Create Pie chart
    function createPieChart (chartData) {
        $scope.highchartsPie = chartData;
        console.log($scope.highchartsPie);
    };

    // Swap chart type
    $scope.swapChartType = function () {

        if ($scope.highchartsPie.series[0].innerSize === '0%') {

            // Configure Semi donut chart
            $scope.highchartsPie.options.plotOptions.pie.startAngle = '-90';
            $scope.highchartsPie.options.plotOptions.pie.endAngle = '90';
            $scope.highchartsPie.series[0].innerSize = '50%';

        } else {

            // Discard Semi donut configuration
            $scope.highchartsPie.options.plotOptions.pie.startAngle = '-180';
            $scope.highchartsPie.options.plotOptions.pie.endAngle = '180';
            $scope.highchartsPie.series[0].innerSize = '0%';

        }
    };

    // Show/Hide Legend on chart
    $scope.showLegend = function () {

        if ($scope.highchartsPie.options.plotOptions.pie.showInLegend === false) {

            // Show Legend
            $scope.highchartsPie.options.plotOptions.pie.showInLegend = true;
            $scope.highchartsPie.options.plotOptions.pie.dataLabels = '';

        } else {

            // Hide legend
            $scope.highchartsPie.options.plotOptions.pie.showInLegend = false;
            $scope.highchartsPie.options.plotOptions.pie.dataLabels = {
                enabled: true,
                format: "<b>{point.name}</b>: {point.percentage:.1f} %"
            };

        };
    };
    

});