;(function($){

// CLOSE EVERYTHING ON CLICK OUTSIDE

$(document).on('click', function (e) {
  if (!$(e.target).closest('.navbar-dropdown').length) {
    closeNavbarDropdown($('.navbar-dropdown + .open'));
  }
});



// Navbar dropdowns handling

$('.navbar-dropdown').on('click', function (e) {
  e.preventDefault();
  closeNavbarDropdown(
    $('.navbar-dropdown + .open')
      .not($(this))
      .not($(this).parents())
  );

  var navbarItem = $(this).next();

  if (navbarItem.css('display') === 'none') {
    openNavbarDropdown(navbarItem);
  }
  else if (navbarItem.css('display') === 'block') {
    closeNavbarDropdown(navbarItem.find('ul.open'));
    closeNavbarDropdown(navbarItem);
  }
});






function openNavbarDropdown (navbarItem) {
  var options = {
    duration: 300,
    easing: [0.25, 0.8, 0.25, 1],
    queue: false
  };
  navbarItem
    .velocity('fadeIn', options)
    .velocity('slideDown', options)
    .addClass('open');
}
function closeNavbarDropdown (navbarItem) {
  var options = {
    duration: 300,
    easing: [0.25, 0.8, 0.25, 1],
    queue: false
  };
  navbarItem
    .velocity('fadeOut', options)
    //.velocity('slideUp', options)
    .removeClass('open');
}

})(Zepto);
