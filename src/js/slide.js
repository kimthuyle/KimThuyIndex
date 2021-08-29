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
