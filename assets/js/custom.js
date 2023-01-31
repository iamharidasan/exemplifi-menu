jQuery(document).ready(function ($) {
  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $(".customDropdown").on("mouseenter", () => {
        $(".customDropdown > a").addClass("show")
        $(".customDropdown > a").attr("aria-expanded", "true")
        $(".customDropdown > div").attr("data-bs-popper", "none")
        $(".customDropdown > div").addClass("show")
      })
      $(".customDropdown").on("mouseleave", () => {
        $(".customDropdown > a").removeClass("show")
        $(".customDropdown > a").attr("aria-expanded", "false")
        $(".customDropdown > div").removeAttr("data-bs-popper", "none")
        $(".customDropdown > div").removeClass("show")
      })
    }
  })
  $(window).on("resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $("#menuHolder").show()
    }
  })
  $(".navbar-toggler").on("click", () => {
    $("#menuHolder").slideToggle()
  })
})
