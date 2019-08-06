
$(document).ready(function(){
   

    $('#fluid-img1').on('click', function(){
        $('#fluid-img-main').attr("src","img/angle1.jpg")
    })
    $('#fluid-img2').on('click', function(){
        $('#fluid-img-main').attr("src","img/angle2.jpg")
    })
    $('#fluid-img3').on('click', function(){
        $('#fluid-img-main').attr("src","img/angle3.jpg")
    })
    $('#fluid-img4').on('click', function(){
        $('#fluid-img-main').attr("src","img/angle4.jpg")
    })
    $('#fluid-img5').on('click', function(){
        $('#fluid-img-main').attr("src","img/angle1.jpg")
    })

    //mouseenter mouseleave

    $('#fluid-img1').on('mouseenter', function(){
        $('#fluid-img-main').attr("src","img/angle1.jpg")
    })
    $('#fluid-img1').on('mouseleave', function(){
        $('#fluid-img-main').attr("src", newVar)
    })
    $('#fluid-img2').on('mouseenter', function(){
        $('#fluid-img-main').attr("src","img/angle2.jpg")
    })
    $('#fluid-img2').on('mouseleave', function(){
        $('#fluid-img-main').attr("src", newVar)
    })
    $('#fluid-img3').on('mouseenter', function(){
        $('#fluid-img-main').attr("src","img/angle3.jpg")
    })
    $('#fluid-img3').on('mouseleave', function(){
        $('#fluid-img-main').attr("src", newVar)
    })
    $('#fluid-img4').on('mouseenter', function(){
        $('#fluid-img-main').attr("src","img/angle4.jpg")
    })
    $('#fluid-img4').on('mouseleave', function(){
        $('#fluid-img-main').attr("src", newVar)
    })
    $('#fluid-img5').on('mouseenter', function(){
        $('#fluid-img-main').attr("src","img/angle1.jpg")
    })
    $('#fluid-img5').on('mouseleave', function(){
        $('#fluid-img-main').attr("src", newVar)
    })

    //variable var
    var newVar='img/angle1.jpg';
    
    $('#fluid-img1').click(function (){
        newVar='img/angle1.jpg';
    });
    $('#fluid-img2').click(function (){
        newVar='img/angle2.jpg';
    });
    $('#fluid-img3').click(function (){
        newVar='img/angle3.jpg';
    });
    $('#fluid-img4').click(function (){
        newVar='img/angle4.jpg';
    });
    $('#fluid-img5').click(function (){
        newVar='img/angle1.jpg';
    });
    

    $('#fluid-img1').on("click", function() {
        if (newVar == 'img/angle1.jpg') {
              $('#thumbnail-container1').addClass('is-active');
              $('#thumbnail-container2').removeClass('is-active');
              $('#thumbnail-container3').removeClass('is-active');
              $('#thumbnail-container4').removeClass('is-active');
              $('#thumbnail-container5').removeClass('is-active');     
        }
  })

  $('#fluid-img2').on("click", function() {
    if (newVar == 'img/angle2.jpg') {
          $('#thumbnail-container2').addClass('is-active');
          $('#thumbnail-container1').removeClass('is-active');
          $('#thumbnail-container3').removeClass('is-active');
          $('#thumbnail-container4').removeClass('is-active');
          $('#thumbnail-container5').removeClass('is-active');        
    }
})

$('#fluid-img3').on("click", function() {
    if (newVar == 'img/angle3.jpg') {
          $('#thumbnail-container3').addClass('is-active');
          $('#thumbnail-container1').removeClass('is-active');
          $('#thumbnail-container2').removeClass('is-active');
          $('#thumbnail-container4').removeClass('is-active');
          $('#thumbnail-container5').removeClass('is-active');        
    }
})

$('#fluid-img4').on("click", function() {
    if (newVar == 'img/angle4.jpg') {
          $('#thumbnail-container4').addClass('is-active');
          $('#thumbnail-container1').removeClass('is-active');
          $('#thumbnail-container3').removeClass('is-active');
          $('#thumbnail-container2').removeClass('is-active');
          $('#thumbnail-container5').removeClass('is-active');        
    }
})
$('#fluid-img5').on("click", function() {
    if (newVar == 'img/angle1.jpg') {
          $('#thumbnail-container5').addClass('is-active');
          $('#thumbnail-container1').removeClass('is-active');
          $('#thumbnail-container3').removeClass('is-active');
          $('#thumbnail-container4').removeClass('is-active');
          $('#thumbnail-container2').removeClass('is-active');        
    }
})

})
