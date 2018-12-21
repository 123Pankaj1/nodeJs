var app = angular.module("myApp", []);
app.controller("appCtrl", function($scope,$http){
	$scope.modal = {};
	$scope.imageVar = 'file:///D:/nodeApp/image/';

	$scope.sendEmail = function(){
		console.log("email", $scope.to,$scope.subject,$scope.message)
		var json = {
			"to":$scope.to,
			"subject":$scope.subject,
			"message":$scope.message
		}
		$http.post("http://127.0.0.1:5000/api/sendemailapi",json)
            .then(
            function (response) {              
				$scope.emailDataArr = response.data.Data;
				 console.log("email res =---",response);
            },
            function(errResponse){
			  console.log("email err ---",errResponse);
               console.error('Error while calling web service');
                
            }
        );
	}

	$scope.submit = function(){
		var url = 'http://127.0.0.1:5000/api/postrestfulapi';
		//console.log($scope.myFile)
		var json = {
			"name":$scope.modal.name,
			"age":$scope.modal.age,
			"mobile_no":$scope.modal.mobile_no,
			//"image": $scope.myFile.name
		}
        $http.post(url,json)
            .then(
            function (response) {
                console.log(response);
					$scope.getData();
					$scope.modal = {};
            },
            function(errResponse){
			console.log(errResponse);
                console.error('Error while calling web service');
               
            }
        );
	}
	
	$scope.getData = function(){
		$http.get("http://127.0.0.1:5000/api/getrestfulapi")
            .then(
            function (response) {              
				$scope.getDataArr = response.data.Data;
				 console.log(response);
            },
            function(errResponse){
			  console.log(errResponse);
               console.error('Error while calling web service');
                
            }
        );
	}
	$scope.getData();
	
	
})

app.directive('fileModel', ['$parse', function ($parse) {
	return {
	   restrict: 'A',
	   link: function(scope, element, attrs) {
		  var model = $parse(attrs.fileModel);
		  var modelSetter = model.assign;
		  
		  element.bind('change', function(){
			 scope.$apply(function(){
				modelSetter(scope, element[0].files[0]);
			 });
		  });
	   }
	};
 }]);
