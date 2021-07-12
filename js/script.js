const $video = document.querySelector("#video");
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward = document.querySelector('#forward');
const $backward = document.querySelector('#backward');
const $progress = document.querySelector('#progress');
const $muted = document.querySelector("#muted");
const $sound = document.querySelector("#sound");

let reproducirClip = () => {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

let pausarClip = () => {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

let avanzarClip = () => {
    $video.currentTime += 10;
}

let retrocederClip = () => {
    $video.currentTime -= 10;
}

let cargaClip = () => {
    $progress.max = $video.duration;    
}

let timeClip = () => {
    $progress.value = $video.currentTime;    
}


$play.addEventListener('click',reproducirClip);
$pause.addEventListener('click',pausarClip);
$forward.addEventListener('click',avanzarClip);
$backward.addEventListener('click',retrocederClip);
$video.addEventListener('loadedmetadata',cargaClip);
$video.addEventListener('timeupdate',timeClip);
$progress.addEventListener('input',()=>{    
    $video.currentTime = $progress.value;
});

$muted.addEventListener('click',function(){
    $video.muted = true;
    this.hidden = true;
    $sound.hidden = false;
});

$sound.addEventListener('click',function(){
    $video.muted = false;
    this.hidden = true;
    $muted.hidden = false;
});
