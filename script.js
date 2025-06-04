
document.getElementById("button1").addEventListener("click", function () {
    document.getElementById("content").style.display = "none";
    document.getElementById("submitted-content").style.display = "block";
});

document.getElementById("button2").addEventListener("click", function () {
    document.getElementById("content").style.display = "flex";
    document.getElementById("submitted-content").style.display = "none";
});
