
/**
 * Created by 75339 on 2016/11/23.
 */
console.log($(".list-ul-item").width()*$(".piclistbox>li").length)
$(".piclistbox").width(($(".list-ul-item").width()+10)*$(".piclistbox").find('li').length)

$(".qx").click(function(){
    $(".firpz").removeClass("pz");
    $(".firxc").removeClass("xc")
    $(".firzm").removeClass("zmm")
    $(".fircg").removeClass("cg")
    $(".pop").fadeOut(500);
})

$("#fb").click(function(){
    $(".pop").fadeIn(300);
    $(".firpz").addClass("pz");
    $(".firxc").addClass("xc")
    $(".firzm").addClass("zmm")
    $(".fircg").addClass("cg")
})