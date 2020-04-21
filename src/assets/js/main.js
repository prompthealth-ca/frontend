jQuery(document).ready(function() {
  jQuery(".logo-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  // steps
  $(".btn-circle").on("click", function() {
    $(".btn-circle.btn-primary")
      .removeClass("btn-primary")
      .addClass("btn-secondary");
    $(this)
      .addClass("btn-primary")
      .removeClass("btn-secondary")
      .blur();
  });

  $(".next-step, .prev-step").on("click", function(e) {
    var $activeTab = $(".tab-pane.active");

    $(".btn-circle.btn-primary")
      .removeClass("btn-primary")
      .addClass("btn-secondary");

    if ($(e.target).hasClass("next-step")) {
      var nextTab = $activeTab.next(".tab-pane").attr("id");
      $('[href="#' + nextTab + '"]')
        .addClass("btn-primary")
        .removeClass("btn-secondary");
      $('[href="#' + nextTab + '"]').tab("show");
    } else {
      var prevTab = $activeTab.prev(".tab-pane").attr("id");
      $('[href="#' + prevTab + '"]')
        .addClass("btn-primary")
        .removeClass("btn-secondary");
      $('[href="#' + prevTab + '"]').tab("show");
    }
  });
});
