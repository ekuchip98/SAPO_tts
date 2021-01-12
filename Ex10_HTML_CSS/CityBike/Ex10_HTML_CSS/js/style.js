$(document).ready(function(){
  $(".img-1").click(function(){
    $('.img-1').css("opacity","1");
    $('.img1').attr("src", "./images/product/product3.jpg");
    $('.img-2, .img-3, .img-4, .img-5').css("opacity","0.5");
  });
  $(".img-2").click(function(){
    $('.img1').attr("src", "./images/product/product2.jpg");
    $('.img-1, .img-3, .img-4, .img-5').css("opacity","0.5");
    $('.img-2').css("opacity","1");
  });
  $(".img-3").click(function(){
    $('.img-1, .img-2, .img-4, .img-5').css("opacity","0.5");
    $('.img-3').css("opacity","1");
    $('.img1').attr("src", "./images/product/product3.jpg");
  });
  $(".img-4").click(function(){
    $('.img-1, .img-3, .img-2, .img-5').css("opacity","0.5");
    $('.img-4').css("opacity","1");
    $('.img1').attr("src", "./images/product/product2.jpg");
  });
  $(".img-5").click(function(){
    $('.img-1, .img-3, .img-4, .img-2').css("opacity","0.5");
    $('.img-5').css("opacity","1");
    $('.img1').attr("src", "./images/product/product3.jpg");
  });
  
  $('.show-1').click(function(){
    $('.quick-view').css("display","block");
  });
  $('.icon-exit').click(function(){
    $('.quick-view').css("display","none");  
  });
  $('.add-cart-1').click(function(){
    $('.show-my-cart').css("display","block");
  });
  $('.icon-exit').click(function(){
    $('.show-my-cart').css("display","none");  
  });
  

  // var TopFixMenu = $("#fixNav");
  // // dùng sự kiện cuộn chuột để bắt thông tin đã cuộn được chiều dài là bao nhiêu.
  //   $(window).scroll(function(){
  //   // Nếu cuộn được hơn 150px rồi
  //       if($(this).scrollTop()>150){
  //     // Tiến hành show menu ra   
  //         TopFixMenu.show();
  //       }else{
  //     // Ngược lại, nhỏ hơn 150px thì hide menu đi.
  //         TopFixMenu.hide();
  //       }}
  //   )
});
