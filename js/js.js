
// let scrollY = 0 ;

// $('.wrapper').on('scroll', scroll);
//
// function scroll(){
//     if (scrollY <= window.scrollY) {
//         console.log('down');
//     } else {
//         console.log('up');
//     }
//     scrollY = window.scrollY;
//
//     const wrapper =$('.wrapper');
//
//     const section = $('.section');
//     const www = $('.www');
//     const sectionA = $('.section--active');
//     const index = sectionA.index();
//     console.log(sectionA.index());
//     console.log(wrapper[0].children);
//     // wrapper[0].children[index].removeClass('section--active');
//     // section.removeClass('section--active');
//     // section[1].addClass('section--active');
//     www.scrollTop(200);
//
//     console.log(section[0]);
//
//
// }


$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        paddingTop: 50,
        paddingBottom: 50
    });

    //methods
    $.fn.fullpage.setAllowScrolling(false);

});

