var app = angular
	.module("Demo", ["ngRoute"])
	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when("/home", {
				templateUrl: "templates/home.html",
				controller: "homeController"
			})
			.when("/courses", {
				templateUrl: "templates/courses.html",
				controller: "coursesController"
			})
			.when("/students", {
				templateUrl: "templates/students.html",
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