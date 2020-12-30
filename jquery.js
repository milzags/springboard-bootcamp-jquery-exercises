// // when the DOM is ready, console.log the message "let's get ready to party with jQuery"
// $(function () {
//     console.log("Let's get ready to party with jQuery!");
// });

// //give all images inside of an article tag the class of image-center
// // this class is defined inside of the style tag in the head
// $("article img").addClass("image-center");

// //remove the last paragraph in the article
// $('article p:last-child').remove()

// // set the font size of the title to be a random pixel from 0 to 100
// $('title').css("font-size", Math.floor(Math.random() * 100));

// //add an item to the list:
// $('ol').append($('<li>', { text: 'It can say whatever I want' }));

// //empty the aside and create a paragraph apologize for the list's existence
// $('aside').empty().append($('<p>', { text: 'I apologize for the list' }));

// //when you change the numbers in the three inputs in on the bottom, the background
// // color of the body should change to match whatever the three values of the
// // inputs are


// //come back to this

// //add an event listener so what when you click on the image, it is removed from the dom
// $('img').on('click', function(event) {
//     $(event.target).remove();
// });

$(function () {
    $('li').on({
        mouseenter: function() {
            $(this).css('color','red');
        },

        mouseout: function() {
            $(this).css('color','black');
        },
    })
    
    //using this above ensures that you are only targetting and hiding one element.
    //if you use ('li') you will hide them all no matter which one you click on.
    
    //let's change the text of the div with class .output

    $('#output').on('click', function() {
        $(this).html('This is changing inner HTML text');
        $(this).toggleClass('change-bg');
    })

    $('h1').on('click', function() {
        $('h1').hide();
    })

    
    $('p').on({
        mouseenter: function() {
            $(this).toggleClass('added');
        },
        mouseout: function() {
            $(this).toggleClass('added');
        }

    })


    $('input').on('focus', function() {
        $(this).toggleClass('infocus');
        $(this).val('clicked');
    })

    $('input').on('blur', function() {
        $(this).toggleClass('infocus');
        $(this).val('');
    })

    //focus and blur are more specific to forms themselves 

    $('#btn1').on('click', function() {
        $('#output').append('Text appended to output ID');
        
    });

});

