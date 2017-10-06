
	var secApp = angular.module("mallApp", []);
	
	secApp.controller('mallCtrl',["$scope","mallService",function($scope,mallService,msg){
		
		this.msg = msg ;

		var mallSerCheck =[] ;

		$scope.currentPage = 0 ;
		$scope.pageSize = 7 ;	

		 $scope.products =  [
    
    		{name:"Apples",category:"Fruits"},
    		{name:"Banana",category:"Fruits"},
    		{name:"Graps",category:"Fruits"}
    
    	]	

		$scope.numberOfPages=function(){
        	return Math.ceil($scope.mallSerCheck.length/$scope.pageSize);                
    	}		
		
		$scope.secMessage = "second controller Bhole Nath";

		$scope.customer = {
        	name: 'David',
        	street: '1234 Anywhere St.'
    	};
      

		$scope.mallSerCheck = mallService.callRecordsJson();

		//$scope.gitData = mallService.gitApi();	

		
	}]);

	secApp.filter('startFrom', function() {
    	return function(input, start) {
        	start = +start; //parse to int
        	return input.slice(start);
    	}
	});

	secApp.directive('myDirectiveMall',function(){

		return{
			restrict : 'EA',
			 //Isolated controller
			template :'<div><p>customer name : {{customer.name}}</p></div>'    /*"<h1>working</h1>"*/ /*templateUrl :'home.html'*/
				
			/*scope : {

			 name: '@'
			  // name: '@someOtherName'

			}*/

			/*replace : true ,
			link : function(scope, element, attrs){

				element.on('click', function(event) {
					        		//Update DOM.						
								element.html('Thanks for buying this item.');
								element.css({
									color: 'green'
								});
						  });
			}*/
		}

	});

	secApp.directive('unorderList',function(){

		
  	return {
  		restrict  :'EA',
  		template : 'Directive'


  	}

	});



	





