let icon = document.querySelector(".icon");
let view = document.querySelector(".small-view");
icon.addEventListener("click", function () {
    if (view.classList !== document.querySelector("right-0")) {
        view.classList.toggle("right-0");
    }
})

const accordianItems = document.querySelectorAll(".tab");

accordianItems.forEach(function (item) {
    item.addEventListener("click", function () {
        const isItemOpen = item.classList.contains("active"); //returns false
        accordianItems.forEach(function (item) { item.classList.remove("active") });
        if (!isItemOpen) //returns true
        {
            item.classList.toggle("active");
        }
    })
});

