var navButton = document.getElementById("js-nav-trigger");

navButton.addEventListener("click", function(){
    // change aria-expanded
    let expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    // console.log(expanded); - tests if it works
    // change data-visible
    let menu = document.getElementById("js-site-nav");
    let visible = menu.dataset.visible === "true" || false;
    menu.dataset.visible = !visible;
    // hiding body after full screen menu
    if (!visible === true) {
        document.body.style.overflowY = "hidden";
    } else{
        document.body.removeAttribute("style");
    }
})
