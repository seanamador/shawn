jQuery(window).load(function () {
    $('.wrapper').css('visibility','visible');
    $('.loader-div').fadeOut(300);
    $('body').css('position','relative');
    $('html').css('position','relative');
});


jQuery(document).ready(function($){
	var w,mHeight,tests=$("#testimonials");
	w=tests.outerWidth();
	mHeight=0;
	tests.find(".testimonial").each(function(index){
		$("#t_pagers").find(".pager:eq(0)").addClass("active");	//make the first pager active initially
		if(index==0)
			$(this).addClass("active");	//make the first slide active initially
		if($(this).height()>mHeight)	//just finding the max height of the slides
			mHeight=$(this).height();
		var l=index*w;				//find the left position of each slide
		$(this).css("left",l);			//set the left position
		tests.find("#test_container").height(mHeight);	//make the height of the slider equal to the max height of the slides
	});
	$(".pager").on("click",function(e){	//clicking action for pagination
		e.preventDefault();
		next=$(this).index(".pager");
		clearInterval(t_int);	//clicking stops the autoplay we will define later
		moveIt(next);
	});
	var t_int=setInterval(function(){	//for autoplay
		var i=$(".testimonial.active").index(".testimonial");
		if(i==$(".testimonial").length-1)
			next=0;
		else
			next=i+1;
		moveIt(next);
	},3000);
});
function moveIt(next){	//the main sliding function
	var c=parseInt($(".testimonial.active").removeClass("active").css("left"));	//current position
	var n=parseInt($(".testimonial").eq(next).addClass("active").css("left"));	//new position
	$(".testimonial").each(function(){	//shift each slide
		if(n>c)
			$(this).animate({'left':'-='+(n-c)+'px'});
		else
			$(this).animate({'left':'+='+Math.abs(n-c)+'px'});
	});
	$(".pager.active").removeClass("active");	//very basic
	$("#t_pagers").find(".pager").eq(next).addClass("active");	//very basic
}

$(".expand-about").click(function () {
    $(".about-page-content-2").css ("display","inline-block");
    $(".about-page-content-3").css ("display","inline-block");
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});



$(function() {

  // Scroll smoothly
  $('[data-smooth-scroll]').on('click', function(e) {
    var targetEl = $($(this).attr('href'))

    // Make sure the target is on this page
    if (targetEl.length < 1) return

    $('body, html').animate({scrollTop: targetEl.offset().top}, 800)

    e.preventDefault()
  })

})


jQuery(function($)  
{
    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'sVRLFidC1A7K56TuUkyUQg',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Website Contact Form Submission',
                    'text': msg,
                    'to': [
                    {
                        'email': 'riyadh@bscheme.com',
                        'name': 'Riyadh Al Nur',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            alert('Your message has been sent. Thank you!'); // show success message
            $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('Error sending message.');
        });
        return false; // prevent page refresh
    });
});


// mobile menu
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
   
  });

// loader

