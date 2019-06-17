$(document).ready(function () {
    $(`.tabs-menu-item`).click(function () {
        switchTabs(this, "active", "tabs-content-item");
    });

    function switchTabs(elem, switchClass, contentClass) {
        $(elem).addClass(switchClass).siblings().removeClass(switchClass);
        const indexOfTab = $(elem).index();
        $(`.${contentClass}`).removeClass(switchClass).eq(indexOfTab).addClass(switchClass);
    }
});

$(document).ready(function () {
    $(".filter-content-item").hide().slice(0,12).show();
    $(".show-more-button").click(function () {
        const loading = document.getElementById("escapingBall_1");
        $(loading).removeClass("escapingBallG-none").addClass("escapingBallG");
        setTimeout(function () {
            const filterImageType = $(".filter-activate").data("filter");
            $(`.filter-content-item${filterImageType}:hidden`).slice(0,12).show();
            $(loading).removeClass("escapingBallG").addClass("escapingBallG-none");
            $(".show-more-button").remove();
        },3000);

    });
    $(".filter-menu-item").click(function () {
        $(this).addClass("filter-activate").siblings().removeClass("filter-activate");
        const imageType = $(this).data("filter");
        console.log(imageType);
        $(".filter-content-item").hide();

        $(`.filter-content-item${imageType}:hidden`).slice(0,12).show();

    })
});

$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        nextArrow: "<i class=\"fas fa-chevron-right next fz-fa\"></i>",
        prevArrow: "<i class=\"fas fa-chevron-left prev fz-fa\"></i>",
         // autoplay: true,
        slidesToShow: 3,
        focusOnSelect: true,
        asNavFor: '.slider-for',
        variableWidth: true,
        slidesToScroll: 1,
        // autoplaySpeed: 10000,
    });
});





