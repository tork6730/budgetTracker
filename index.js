var app = angular.module('myApp',[]);

app.controller('MainController', [ '$scope', function($scope) {

	$scope.incomes = [];
	$scope.expenses = [];
	

	$scope.newTotalIncome = function(){
		var assets = {
			"newIncomeDes": $scope.newIncomeDescription,
			"newIncome": $scope.newIncomeAmount};

	
	$scope.incomes.push(assets);

};

	$scope.newTotalExpense = function(){
			var liabilities = {
				"newExpenseDes": $scope.newExpenseDescription,
				"newExpense": $scope.newExpenseAmount};
		
	$scope.expenses.push(liabilities);
};

	$scope.tIncome = function(){
		var total = 0;
		for (var i = 0; i < $scope.incomes.length; i++)
		{
			total += parseInt($scope.incomes[i].newIncome);
		}
		return total;
	};

	$scope.tLiabilaties = function(){
		var total = 0;
		for (var i = 0; i < $scope.expenses.length; i++)
		{
			total += parseInt($scope.expenses[i].newExpense);
		}
		return total;
	};


}]);
