(() => {
    const video = document.getElementById("presentation");
    const loadingIcon = document.getElementById("video-loading");

    video.addEventListener("canplaythrough", function() {
        loadingIcon.style.display = "none";
        video.style.display = "block";
    });

    const btn = document.querySelector("#burger-toggle");
    const menu = document.querySelector("#phone-menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
})();