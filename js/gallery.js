/*$('.gallery-items'){
var element = document.createElement("div");
element.appendChild(document.createTextNode('HA'));
document.getElementById('gallery-masonry').appendChild(element);
}

*/
/*$(document).ready(function(){
    
    $(".cakebtn").click(function(){
        $(".cupcakes").collapse('hide');
    });
    
});*/



$(document).ready(function(){

	$('.gallery-filter li a').on('click',function(){

		$('.gallery-filter li').removeClass('active');
		$(this).parent().addClass('active');
	});
	
    $('#allbtn').on('click',function(){
    	/*$('.gallery-items')*/
    	$(this).closest('#gallery').find('.cupcakes').removeClass('hide');
    	$(this).closest('#gallery').find('.minicupcakes').removeClass('hide');
    	$(this).closest('#gallery').find('.cakes').removeClass('hide');

    	/*$(this).closest('.gallery-filter li').removeClass('active');
    	$(this).parent().addClass('active');*/
    	
    });

    $('#minicupcakebtn').on('click',function(){
    	/*$('.gallery-items')*/
    	$(this).closest('#gallery').find('.cupcakes').addClass('hide');
    	$(this).closest('#gallery').find('.minicupcakes').removeClass('hide');
    	$(this).closest('#gallery').find('.cakes').addClass('hide');
    	

    });

    $('#cupcakebtn').on('click',function(){
    	/*$('.gallery-items')*/
    	$(this).closest('#gallery').find('.cupcakes').removeClass('hide');
    	$(this).closest('#gallery').find('.minicupcakes').addClass('hide');
    	$(this).closest('#gallery').find('.cakes').addClass('hide');
    	
    	
    });

    $('#cakebtn').on('click',function(){
    	/*$('.gallery-items')*/
    	$(this).closest('#gallery').find('.cupcakes').addClass('hide');
    	$(this).closest('#gallery').find('.minicupcakes').addClass('hide');
    	$(this).closest('#gallery').find('.cakes').removeClass('hide');
    	
    	
    });
    
});