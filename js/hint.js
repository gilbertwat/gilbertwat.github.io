! function($) {
  setTimeout(function() {
    $('.hint').removeClass('hide');
  }, 2500);

  $('.hint .hint-keywords').click(function() { 
    var self$ = $(this);
    var keyword = self$.data('keyword');
    $("#search-query").typed({
      strings: [keyword],
      typeSpeed: 0,
      callback: function() {
        $("#search-query").keyup();
        //TODO refactor
        $('#search').removeClass('full-screen');
      }
    });
  });
}($);
