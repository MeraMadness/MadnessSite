function playAudio() {
    var audio = document.getElementById('myAudio');
    audio.currentTime = 0; // Start from the beginning
    audio.play();
    setTimeout(function() {
        audio.pause();
    }, 33000); // Stop after 30 seconds
}