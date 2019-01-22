$(document).ready(function() {
    changeBannerText(); // Change banner texts

    applyScrolled(); // Add .scrolled (background and shadow) to navbar on page INIT
    navBarScroll(); // Add .scrolled (background and shadow) to navbar on page SCROLL

    toggleMenu();
});

// CHanges banner text contents -------------------------------------------------------
function changeBannerText() {
    // Counter | WOrds
    var counter = 0;
    var interval = 7000; // 7 seconds
    var words = [
        ['creativity', 'wide imagination'],
        ['skills ', 'hard work'],
        ['concepts ', 'research'],
    ];
    // Access node elements
    var changeable1 = document.querySelector('.banner__content .changeable-1');
    var changeable2 = document.querySelector('.banner__content .changeable-2');

    // Run!!!
    setInterval(changeWords, interval);

    // Funtion that changes the words
    function changeWords() {
        // Change the words
        changeable1.innerHTML = words[counter][0];
        changeable2.innerHTML = words[counter][1];
        counter++;

        // Reset the counter if it's at the end of the array
        if(counter >= words.length)
            counter = 0
    }
}


// Navbar scroll effect ---------------------------------------------------------------
function applyScrolled() {
    // Get scroll postition
    var scrollPos = $(window).scrollTop();
    checkPos(scrollPos, 40);
}

// Scroll event
function navBarScroll() {
    $(window).scroll(function() {
        applyScrolled();
    });
}

// Add scrolled class and its effect
function addScrolledClass() {
    $('#main-header').addClass('scrolled');
}

// Remove scrolled class and its effect
function removeScrolledClass() {
    $('#main-header').removeClass('scrolled');
}

// Receives scroll current position and desired scroll position to trigger .addScrolledClass
function checkPos(scrollPos, targetPos) {
    if(scrollPos > targetPos) { 
        addScrolledClass();
    }
    else {
        removeScrolledClass();
    }
}


// Toggle Menu ------------------------------------------------------------------------
function toggleMenu() {
    // Open the mobile menu
    $('.uk-navbar-toggle').on('click', function() {
        $('nav.mobile-menu').toggleClass('mobile-menu_open');
    });

    // CLose the mobile menu
    $('.mobile-menu_close-btn').on('click', function() {
        $('nav.mobile-menu').removeClass('mobile-menu_open');
    });
}