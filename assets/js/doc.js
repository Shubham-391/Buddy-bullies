let icon = document.querySelector(".icon");
let view = document.querySelector(".small-view");
icon.addEventListener("click", function () {
    if (view.classList !== document.querySelector("right-0")) {
        view.classList.toggle("right-0");
    }
})