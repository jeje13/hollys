
$(function(){
    $(".tgl_btn") .click(function(){
        $(".nav").css("display","block");
    });
});
$(function(){
    $(".close_btn") .click(function(){
        $(".nav").css("display","none");
    });
});
$(function(){
$("#banner01").click(function(){
    $(".banner01").css("display","block");
    $(".banner02").css("display","none");
    $(".banner03").css("display","none");
});

$("#banner02").click(function(){
    $(".banner01").css("display","none");
    $(".banner02").css("display","block");
    $(".banner03").css("display","none");
});
$("#banner03").click(function(){
    $(".banner01").css("display","none");
    $(".banner02").css("display","none");
    $(".banner03").css("display","block");
});
});
