function(){

  function PortfolioListController( $scope ){

    //initialize scope variables
    $scope.new_portfolio = {};
    $scope.add_portfolio_error = "";

    $scope.portfolios = [
      {name: 'vessel1309', title: 'Call of Booty', date: '2013-09-01', description: 'Arrrgh mateys! This be the finest vessel sailing these seas that yer eyes ever laid sight on. Arrrgh.', imageurl: 'images/drunkenPirate_thumb3.png' },
      {name: 'innocents1404', title: 'The Sack of the Innocents', date: '2014-04-15', description: 'This be a detail of the sacking of the innocents where I played an important role as business analyst and in implementation.', imageurl: 'images/drunkenPirate_thumb2.png' },
      {name: 'firstmate1210', title: 'Pipe and First Mate', date: '2012-10-01', description: 'After a hard day of lootin\' and shootin\' I like to relax with my best mates and tally up the days booty.', imageurl: 'images/drunkenPirate_thumb1.png' }
    ];  

    //set the app for this app module
    portfolioApp.controller("PortfolioListController", PortfolioListController);

    //error trapping/validation
    $scope.addPortfolio = function( new_portfolio ){
      if (new_portfolio == null){
        $scope.add_portfolio_error = "Missing title";
      }
      else if(!new_portfolio.title){
        $scope.add_portfolio_error = "Missing title";
      }
      else if (!new_portfolio.date || !is_valid_date(new_portfolio.date){
        $scope.add_portfolio_error = "You must provide a date in format yyyy/mm/dd";
      }
      else if (!new_portfolio.description){
        $scope.add_portfolio_error = "Missing description";
      }
      else if (!new_portfolio.name){
        $scope.add_portfolio_error = "Missing name";
      }
      else {
        $scope.portfolios.push( new_portfolio );
        $scope.adding_portfolio = {};
        $scope.add_portfolio_error = "";
      };
    };
  }
}();
