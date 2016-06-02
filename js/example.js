angular.module('shopApp', ['ngAnimate', 'ui.bootstrap']);
angular.module('shopApp').controller('shopController', function ($scope, $uibModal, $log) {

  /*$scope.items = ['item1', 'item2', 'item3'];
  */
    
    $scope.cupcakes = [
        {
            'name':"cupcake1",
            'img': '/img/shop/flower1.jpg',
            'caption': 'cupcake1',
            'thumbUrl' : '/img/shop/flower1.jpg',
            'index':0
        },
        {
            'name':"cupcake2",
            'img': '/img/shop/flower2.jpg',
            'caption': 'cupcake2',
            'thumbUrl' : '/img/shop/flower2.jpg',
            'index':1
        },{
            'name':"cupcake3",
            'img': '/img/shop/flower3.jpg',
            'caption': 'cupcake3',
            'thumbUrl' : '/img/shop/flower3.jpg',
            'index':2
        },{
            'name':"cupcake4",
            'img': '/img/shop/flower4.jpg',
            'caption': 'cupcake4',
            'thumbUrl' : '/img/shop/flower4.jpg',
            'index':3
        },{
            'name':"cupcake5",
            'img': '/img/shop/flower5.jpg',
            'caption': 'cupcake5',
            'thumbUrl' : '/img/shop/flower5.jpg',
            'index':4
        },{
            'name':"cupcake6",
            'img': '/img/shop/flower6.jpg',
            'caption': 'cupcake6',
            'thumbUrl' : '/img/shop/flower6.jpg',
            'index':5
        },{
            'name':"cupcake7",
            'img': '/img/shop/flower7.jpg',
            'caption': 'cupcake7',
            'thumbUrl' : '/img/shop/flower7.jpg',
            'index':6
        }
        
        
    ];
  $scope.animationsEnabled = true;

  $scope.open = function (index) { 

    
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      cupcakeIndex: index,
      resolve: {
          
        cupcake: function () {
          return $scope.cupcakes[index];
        }
      }
        
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('shopApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance,$log, cupcake) {
    
  $scope.cupcake = cupcake;
  

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});