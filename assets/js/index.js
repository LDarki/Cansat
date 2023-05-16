const video = document.getElementById("presentation");
const loadingIcon = document.getElementById("video-loading");

video.addEventListener("canplaythrough", function() {
    loadingIcon.style.display = "none";
    video.style.display = "block";
    video.play();  
});