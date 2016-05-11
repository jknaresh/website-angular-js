var app = angular
	.module("Demo", ["ngRoute"])
	.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
    })
	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when("/", {
				templateUrl: "home.html",
				controller: "homeController"
			})
			.when("/courses", {
				templateUrl: "courses.html",
				controller: "coursesController"
			})
			.when("/home",{
				templateUrl: "courses.html",
				controller: "coursesController"
			})
			.when("/students", {
				templateUrl: "students.html",
				controller: "studentsController"
			})
			$locationProvider.html5Mode(true);
	})
	.controller("homeController", function($scope){
		$scope.homePage = "Home page message";
	})
	.controller("coursesController", function($scope){
		$scope.coursesPage = "Courses page message";
	})
	.controller("studentsController", function($scope){
		$scope.studentsPage = "Students page message";
	})


	/***Note $interpolateProvider is used to distinguish Django interpolate with Angular interpolate provider***/