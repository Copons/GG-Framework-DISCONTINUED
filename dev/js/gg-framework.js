;(function($){


$('.navbar-dropdown').on('click', function (e) {
  e.preventDefault();
  var navbarItem = $(this).next();
  var options = {
    duration: 400,
    easing: [0.25, 0.8, 0.25, 1],
    queue: false
  };
  if (navbarItem.css('display') === 'none') {
    navbarItem
      .velocity('fadeIn', options)
      .velocity('slideDown', options);
  }
  else if (navbarItem.css('display') === 'block') {
    navbarItem
    .velocity('fadeOut', options)
    .velocity('slideUp', options);
  }
});

})(Zepto);
