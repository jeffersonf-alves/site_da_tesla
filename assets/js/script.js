

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
    if(scroll == 336) {
        this.alert('olaaa');
    }
});