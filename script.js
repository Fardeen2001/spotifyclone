//console.log('welcome')
//initialise
let songIndex = 0;
let audioElement = new Audio("songs/Rasiya New Song Download Mp3(SongsZilla.Net).mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongTitle = document.getElementById('masterSongTitle');
let song = Array.from(document.getElementsByClassName('song'));
let songs = [
    { songName:"Arijit Singh - Dhokha",filePath:"songs\Arijit Singh - Dhokha(PagalWorld.com.se).mp3",coverPath:"covers/cover1.jpg" ,duration:"4:05"},
    { songName:"Chaand Baaliyaan Remix",filePath:"songs\Chaand Baaliyaan Remix - Dj Lemon_192(PagalWorld.com.se).mp3",coverPath:"covers/cover2.jpg",duration:"2:47"},
    { songName:"Kesariya_192(PagalWorld.com.se)",filePath:"songs\Kesariya_192(PagalWorld.com.se).mp3",coverPath:"covers/cover3.jpg",duration:"4:28"},
    { songName:"Let Me Down Slowly New English Song",filePath:"songs\Let Me Down Slowly New English Song Download 2021(SongsZilla.Net).mp3",coverPath:"covers/cover4.jpg",duration:"2:49"},
    { songName:"Let Me Down Slowly Remix",filePath:"songs\Let Me Down Slowly x Main Dhoondne Ko Zamaane Mein (Gravero Mashup)_192(PagalWorld.com.se).mp3",coverPath:"covers/cover5.jpg",duration:"2:56"},
    { songName:"Maan Meri Jaan New Dj Remix Song",filePath:"songs\Maan Meri Jaan New Dj Remix Song Download(RemixZilla.Com).mp3",coverPath:"covers/cover6.jpg",duration:"3:55"},
    { songName:"Maine Tera Naam Dil Ek Villain Returns",filePath:"songs\Maine Tera Naam Dil Ek Villain Returns New Song Download Mp3(SongsZilla.Net).mp3",coverPath:"covers/cover7.jpg",duration:"3:17"},
    { songName:"Love Me Like You Do",filePath:"songs\Love Me Like You Do Full Mp3 Song Download 2021(SongsZilla.Net).mp3",coverPath:"covers/cover8.jpg",duration:"4:12"},
    { songName:"Pasoori x Despacito Mashup",filePath:"songs\Pasoori x Despacito Mashup - Sush Yohan Music_192(PagalWorld.com.se).mp3",coverPath:"covers/cover9.jpeg",duration:"4:01"},
    { songName:"Rasiya New Song",filePath:"songs\Rasiya New Song Download Mp3(SongsZilla.Net).mp3",coverPath:"covers/cover10.jpg",duration:"4:25"},
    
];
song.forEach((elements , i)=>{
//console.log(elements , i);
elements.getElementsByTagName('img')[0].src = songs[i].coverPath;
elements.getElementsByClassName('songsTitle')[0].innerText = songs[i].songName;
elements.getElementsByClassName('duration')[0].innerText = songs[i].duration;
})
//play/pause music
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})
//listen events
audioElement.addEventListener('timeupdate',()=>{
 console.log('timeupdate');
 //update seekbar
 progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
 //console.log(progress)
 myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('playMusic')).forEach((elements)=>{
    elements.classList.remove('fa-circle-pause')
    elements.classList.add('fa-circle-play')
})
}
Array.from(document.getElementsByClassName('playMusic')).forEach((elements)=>{
    elements.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongTitle.innerText = songs[songIndex].songName
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})
document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongTitle.innerText = songs[songIndex].songName
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongTitle.innerText = songs[songIndex].songName
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})