const hourArrow = document.querySelector(".hour");
const minArrow = document.querySelector(".min");
const secArrow = document.querySelector(".sec");

setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    console.log(hour, min, sec);

    hourArrow.style.transform = "rotate(" + (hour * 30 + min / 2) + "deg)";
    minArrow.style.transform = "rotate(" + (min * 6 + sec / 10) + "deg)";
    secArrow.style.transform = "rotate(" + (sec * 6) + "deg)";
}, 1000);