/** @format */
const ul = document.querySelector(".nav .container .nav-links ul");
const backdrop = document.querySelector(".backdrob");
const btn = document.querySelector(".nav .container .nav-links .menu-btn");

console.log(backdrop);
btn.addEventListener("click", () => {
    ul.style.right = 0;
    backdrop.style.width = "100%";
    // backdrop.style.cssText = " transform: scale(1);";
});

backdrop.addEventListener(
    "click",
    () => {
        ul.style.cssText = "right : -100";
        backdrop.style.width = 0;
    },
    true
);
