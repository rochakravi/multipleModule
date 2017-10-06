app.filter('addToRuppes',function(){

	return function(data){

		return "Now Rs." + data ;
	}

})
app.controller("myCtrl",function($scope,$http){
		 
		$scope.isNavCollapsed = true ;
		$scope.isCollapsed = true ;

		/*$scope.productsmenu =  [
    
    		{name:"Apples",category:"Fruits"},
    		{name:"Banana",category:"Fruits"},
    		{name:"Graps",category:"Fruits"}
    
    	]*/

		//code for available offers 

		$http.get('jsonFiles/offersAvailable.json')
				.then(function(response){
					$scope.offers = response.data.offersData ;
				})

		var self = this;
				self.items = [
					{name: 'Computer', price: 500, condition:'New',brand : 'Lenovo', published:'01/11/2015'},
					{name: 'Phone', price: 200, condition:'New',brand : 'Samsung', published:'02/11/2015'},
					{name: 'Printer', price: 300, condition:'New',brand : 'Brother', published:'06/11/2015'},
					{name: 'Dishwasher', price: 250, condition:'Second-Hand',brand : 'WhirlPool', published:'01/12/2015'},
							];

				
				self.onItemSelect = function(name) {
					console.log('Congrats. You have just bought a', name);
				};	
		 
	 });

app.controller("one",["$scope","mallService",function($scope,mallService){
		 
		//$scope.msg = "love you one" ;
		$scope.msg = mallService.testService() ;
	 }]);

app.directive('itemWidget',[function() {
				return{
					restrict: 'E',
					scope: {
						item: '=',
						promo: '@',
						pickMe : '&onSelect'
					},
					templateUrl: 'view/test.html',
					link : function(scope, element, attrs){
					        //Add event listener for 'click' event
						element.on('click', function(event) {
						
								element.html('Thanks for buying this item.');
								element.css({
									color: 'green'
								});
						  });
					}
				}
	}]);

app.directive('unorderedList',function(){
	return{
		restrict : 'EA',
		template : 'unorder list :{{productsmenu.name}}',
		scope: false 
	}

})