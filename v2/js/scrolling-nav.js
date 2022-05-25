//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});




$('#1').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/1.jpg");
 });
$('#2').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/2.jpg");
 });
$('#3').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/3.jpg");
 });
$('#4').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/4.jpg");
 });
$('#5').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/5.jpg");
 });
$('#6').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/6.jpg");
 });
$('#7').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/7.jpg");
 });
$('#8').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/8.jpg");
 });
$('#9').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/9.jpg");
 });
$('#10').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/10.jpg");
 });
$('#11').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/11.jpg");
 });
$('#12').click(function () {
        $(".spanloader").hide();
        $("#my_image").attr("src", "img/courses/12.jpg");
 });
	