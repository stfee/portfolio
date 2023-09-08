let scroll_up = document.getElementById("scroll_up");

window.onscroll = function() {
if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scroll_up.style.display = "block";
} else {
    scroll_up.style.display = "none";
}
}

scroll_up.addEventListener("click", function() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});