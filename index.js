document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector("article img[src='images/first.jpg']");
    img.addEventListener("click", function () {
        this.src = this.src.includes("first.jpg") ? "images/second.jpg" : "images/first.jpg";
    });
});
