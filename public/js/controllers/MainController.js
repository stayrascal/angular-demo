app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Top Sellers in Books';
    $scope.products = [{
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08'),
        cover: 'img/the-book-of-trees.jpg',
        likes: 0,
        dislikes: 0
    }, {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013', '08', '01'),
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
    }];

    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    };
    /*$scope.move = {
        icon: 'img/move.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
    };

    $scope.shutterbugg = {
        icon: 'img/shutterbugg.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
    };

    $scope.gameboard = {
        icon: 'img/gameboard.jpg',
        title: 'Gameboard',
        developer: 'Armando P.',
        price: 1.99
    };*/
}]);
