var app = angular.module('galleryApp',['bootstrapLightbox']);


app.controller('galleryController',function($scope,Lightbox,$log){
    $log.info('hi');
    $scope.currentTag = 'all';
   $scope.images =  [
       
       {
           'name': "cupcake1",
           'url': "img/gallery/cupcake1.jpg",
           'tag': "cupcake"
           
       },
       {
           'name': "cupcake2",
           'url': "img/gallery/cupcake2.jpg",
           'tag': "cupcake"
       },
       {
           'name': "cupcake3",
           'url': "img/gallery/cupcake3.jpg",
           'tag': "cupcake"
       },
       {
           'name': "cupcake4",
           'url': "img/gallery/cupcake4.jpg",
           'tag': "cupcake"
       },
       {
           'name': "cake1",
           'url': "img/gallery/cake1.jpg",
           'tag': "cake"
       },
       {
           'name': "minicupcake1",
           'url': "img/gallery/mini1.jpg",
           'tag': "minicupcake"
       },
       {
           'name': "minicupcake2",
           'url': "img/gallery/mini2.jpg",
           'tag': "minicupcake"
       }
       
   ];
    
    $scope.openLightboxModal = function (index) {
        
    Lightbox.openModal($scope.images, index);
  };
    
    
   /* $scope.filter = function(tag){
        $scope.images[0].show = false;
        
    };*/
    
    $scope.setTag = function(tag){
        $log.info(tag);
        $scope.currentTag = tag;
    }
    
    
    
});