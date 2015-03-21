var portfolioApp = angular.module("piratePortfolioApp", ["ngRoute"]);

portfolioApp.config(function($routeProvider){
	$routeProvider
		.when("/portfolios", { controller: "PortfolioListController", templateUrl: "app/partials/portfolio_list_partial.html" })
		.when("/", { controller: "PortfolioListController", templateUrl: "app/partials/portfolio_list_partial.html" })
		.when("/404_page", { templateUrl: "app/partials/404.html" })
		.otherwise({ redirectTo: "/404_page" });
});