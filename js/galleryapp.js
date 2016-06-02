var app = angular.module('needName',['bootstrapLightbox']);

app.controller('GalleryCtrl', function(){
    this.images = [
        {
            'name':"hi",
            'img': '/img/gallery/cake1.jpg',
            'caption': 'Cake',
            'thumbUrl' : '/img/gallery/cake1.jpg'
        }
        
        
    ];
    
    this.openLightboxModal = function(index){
        
        Lightbox.openModal($scope.images,index);
    };
    
    
});