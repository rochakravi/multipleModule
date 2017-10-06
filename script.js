// Code goes here


	var app = angular.module("myApp", ["mallApp","ticketApp","profileApp","cartAppModule","ui.router","ui.bootstrap"]);
	
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
		
		.state("home",
		{
			url : "/home",
			templateUrl : "view/home.html",
			controller : "myCtrl"	
		})
			.state("home.one",
			{
				url : "/home/one",
				templateUrl : "home.html",
				controller : "one"	
			})
		.state("mall",
		{
			url : "/Mall",
			templateUrl : "modules/Mall/mall.html",
			controller : "mallCtrl",
			resolve : {

				msg : function(mallService){

					return mallService.callRecordsJson() ;

				}
			}		
		})
		
		.state("ticket",
		{
			url : "/ticket",
			templateUrl : "view/ticket.html",
			controller : "ticketCtrl"			
		})
			.state("ticket.flight",
			{
				url : "/bookFlightTicket",
				templateUrl : "view/bookFlightTicket.html",
				controller : "ticketCtrl"			
			})
				.state("ticket.flight.Wood-u-like",
				{
					url : "/bookFlightTicket/Wood-u-like",
					templateUrl : "view/bookFlightTicket.html",
					controller : "ticketCtrl"			
				})
				.state("ticket.flight.Bag o' nails",
				{
					url : "/bookFlightTicket/Bag o' nails",
					templateUrl : "view/bookFlightTicket.html",
					controller : "ticketCtrl"			
				})
				.state("ticket.flight.Fatcat Investors",
				{
					url : "/bookFlightTicket/Fatcat Investors",
					templateUrl : "view/bookFlightTicket.html",
					controller : "ticketCtrl"			
				})
			.state("ticket.train",
			{
				url : "/bookTrainTicket",
				templateUrl : "view/bookTrainTicket.html",
				controller : "ticketCtrl"			
			})
			.state("ticket.bus",
			{
				url : "/bookBusTicket",
				templateUrl : "view/bookBusTicket.html",
				controller : "ticketCtrl"			
			})
			.state("ticket.hotel",
			{
				url : "/bookHotelTicket",
				templateUrl : "view/bookHotelTicket.html",
				controller : "ticketCtrl"			
			})

		.state("profile",
		{
			url : "/profile",
			templateUrl : "view/profile.html",
			controller : "profileCtrl"			
		})
		.state("profile.pref",
		{
			url : "-pref",
			templateUrl : "view/preference.html",
			controller : "myCtrl"	
		})
			.state("profile.pref.email",
			{
				url : "-email",
				templateUrl : "view/email.html",
				controller : "myCtrl"	
			})
			.state("profile.pref.phone",
			{
				url : "-phone",
				templateUrl : "view/phone.html",
				controller : "myCtrl"	
			})
			.state("profile.pref.address",
			{
				url : "-address",
				templateUrl : "view/address.html",
				controller : "myCtrl"	
			})





		.state("cart",
		{
			url : "/MyCart",
			templateUrl : "view/cart.html",
			controller : "cartController"		
		})
		.state("authorization",
		{
			url : "/authorization",
			templateUrl : "view/ticketSub.html",
			controller : "myCtrl"

		})
		.state("register",
		{
			url : "/register",
			templateUrl : "view/register.html",
			controller : "myCtrl"

		})
		.state("login",
		{
			url : "/login",
			templateUrl : "view/login.html",
			controller : "myCtrl"

		})			
		
	}]);
	
	 
	

