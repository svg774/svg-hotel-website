
$(document).ready(function () {

    // SIDE-MENUBAR
    $(".head_menu").click(function () {
        $(".navside").slideDown(777).css("display", "block");
    });
    $(".cancel").click(function () {
        $(".navside").slideUp(1000);
    });
    $(".navside").mouseleave(function () {
        $(".navside").slideUp(1000);
    });

    // setTimeout(() => {
    //     $("#pop-pop").slideDown(1000).css("display", "block");
    // }, 2000);

    // setTimeout(() => {
    //     $("#pop-pop").slideUp(1000).css("display", "none");        
    // }, 7000);
    $("#pop-pop").fadeToggle(2000, function () {
        $("#pop-pop").css("display", "block");
    });
    $("#cnl-btn").click(function () {
        $("#pop-pop").fadeToggle(2000, function () {
            $("#pop-pop").css("display", "none");
        });
    });
});





