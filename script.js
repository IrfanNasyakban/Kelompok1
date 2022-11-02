function autoScrollTo(el) {
    var top = $("#" + el).offset().top;
    $("html, body").animate({ scrollTop: top }, 1000);
}