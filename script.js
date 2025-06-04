document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const submitted = document.getElementById("submitted-content");
    const mediaQuery = window.matchMedia("(min-width: 600px)");

    function showContentBasedOnWidth() {
        content.style.display = mediaQuery.matches ? "flex" : "block";
    }

    document.getElementById("button1").addEventListener("click", function () {
        content.style.display = "none";
        submitted.style.display = "block";
    });

    document.getElementById("button2").addEventListener("click", function () {
        showContentBasedOnWidth();
        submitted.style.display = "none";
    });

    mediaQuery.addEventListener("change", function () {
        if (submitted.style.display === "none") {
            showContentBasedOnWidth();
        }
    });
});
