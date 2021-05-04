(function () {
    var elem = document.querySelectorAll(".projects li");

    function viewportCheck(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function callbackFunc() {
        for (var i = 0; i < elem.length; i++) {
            if (viewportCheck(elem[i])) {
                elem[i].classList.add("in-view");
            }
        }
    }

    window.addEventListener("load",callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    
})();