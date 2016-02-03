angular.module('starter')
  .controller('CashController', function($scope, $window,$interval) {
    console.log('this is Cash controller');
    console.log('width:', $window.screen.width);
    console.log('height:', $window.screen.height);
    var height = ($window.screen.width - 400) + 'px';
    console.log(height);
    $scope.style = {
      color: 'red',
      background: 'green',
      width: '27%',
      height: '100%',
    };

    var monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    var dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    // Create a newDate() object
    var newDate = new Date();
    // Extract the current date from Date object
    newDate.setDate(newDate.getDate());
    // Output the day, date, month and year
    var date = newDate.getFullYear()+'年'+ monthNames[newDate.getMonth()]+newDate.getDate()+'日 ' +dayNames[newDate.getDay()];
    //console.log(date);
    $scope.date = date;

    setInterval(function() {
      // Create a newDate() object and extract the seconds of the current time on the visitor's
      var seconds = new Date().getSeconds();
      // Add a leading zero to seconds value
      $scope.seconds = (seconds < 10 ? "0" : "") + seconds;
      //console.log((seconds < 10 ? "0" : "") + seconds);
    }, 1000);

    setInterval(function() {
      // Create a newDate() object and extract the minutes of the current time on the visitor's
      var minutes = new Date().getMinutes();
      // Add a leading zero to the minutes value
      $scope.minutes = (minutes < 10 ? "0" : "") + minutes;
      //console.log((minutes < 10 ? "0" : "") + minutes);
    }, 1000);

    setInterval(function() {
      // Create a newDate() object and extract the hours of the current time on the visitor's
      var hours = new Date().getHours();
      // Add a leading zero to the hours value
      $scope.hours = (hours < 10 ? "0" : "") + hours;
      //console.log((hours < 10 ? "0" : "") + hours);
    }, 1000);


    $scope.clock = {
			now : new Date().toLocaleString()
		}
		var updateClock = function(){
		    $scope.clock.now = new Date().toLocaleString() ;
		}
		$interval(function(){
		    updateClock()
		},1000)
		updateClock();
  });
