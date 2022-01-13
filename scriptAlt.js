const audio = document.getElementById('audio');
const moAudio = document.getElementById('moAudio');
const pAudio = document.getElementById('pAudio');
const meAudio = document.getElementById('meAudio');
const aAudio = document.getElementById('aAudio');

const molyna = document.getElementById('molyna');
const megan = document.getElementById('megan');
const parker = document.getElementById('parker');
const allie = document.getElementById('allie');

function loadSound() {
    stopAllAudio();
    audio.play();
}

function molynaSound() {
    /*stopAllAudio();*/
    moAudio.play();
    resetAudio(moAudio);
}

function parkerSound() {
    /*stopAllAudio();*/
    pAudio.play();
    resetAudio(pAudio);
}

function meganSound() {
    /*stopAllAudio();*/
    meAudio.play();
    resetAudio(meAudio);
}

function allieSound() {
    /*stopAllAudio();*/
    aAudio.play();
    resetAudio(aAudio);
}

function stopAllAudio() {
    audio.pause();
    audio.currentTime = 0;
    moAudio.pause();
    moAudio.currentTime = 0;
    pAudio.pause();
    pAudio.currentTime = 0;
    meAudio.pause();
    meAudio.currentTime = 0;
    aAudio.pause();
    aAudio.currentTime = 0;
}

function resetAudio(audioFile) {
    audioFile.currentTime = 0;
}
/*
molyna.addEventListener('onmouseenter', function () {molynaSound();});
parker.addEventListener('onmouseenter', function () {parkerSound();});
megan.addEventListener('onmouseenter', function () {meganSound();});
allie.addEventListener('onmouseenter', function () {allieSound();});
*/
