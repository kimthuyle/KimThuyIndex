$(document).ready(function(){
  $(".slide-women .owl-carousel").owlCarousel({
    items:3,
    loop:true,
    nav:true,
    navText:[
      `<i class="fas fa-chevron-left"></i>`,
      `<i class="fas fa-chevron-right"></i>`,
    ]
  });
});

$(document).ready(function(){
  $(".kimthuy .owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplayTimeout:1000,
    video:true,
  });
});

var video=document.querySelector('.video');
var btn=document.getElementById('play-pause');//gan bien play-pasue cho btn

function togglePause(){
    if(video.paused){// .paused la thuoc tinh paused trong HTML5
        btn.className='pause';
        video.play();
    }
    else{
        btn.className='play';
        video.pause();
    }
}
btn.onclick=function(){
    togglePause();
}
