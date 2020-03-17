$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win,$navbar,width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win,$navbar,width);
    });

    $toggle_click(function(e){
        $navbar.toggleClass("toggle-left");
    });

});


// Method for menu bar resizing
function toggle_onclick($win,$navbar,width){
    if($win.width() <= 768){
        $navbar.css({left:`-${width}px`});
    } else {
        $navbar.css({left:'0px'});
    }
}

//Methods for text animation
var typed = new Typed('#typed',{
    strings:[
        'a Web Developer',
        'a Programmer',
        'a coffee snob.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2',{
    strings:[
        'a Web Developer',
        'a Programmer',
        'a coffee snob.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
