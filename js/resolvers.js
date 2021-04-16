/**
 * @description resolve age in resolve-age elements
 */
function resolveAge() {
  const birthdate = new Date(1997, 4, 30);
  const diff = Date.now() - birthdate.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  // Replace all tags
  $("[resolve-age]").each(function () {
    $(this).text(age);
  });
}

/**
 * @description resolve copyright year
 */

function resolveCopyright() {
  const year = new Date().getFullYear();
  $("[resolve-copyright]").each(function () {
    $(this).text(year);
  });
}

/**
 * @description resolve video fallback source in case fails. Uses an image instead
 */
function resolveVideoFallback() {
  $("[resolve-video-fallback]").each(function () {
    const fallback = $(this).attr("resolve-video-fallback");
    // Add listener
    console.log(fallback, this);
    $(this).on("error", function () {
      const image = document.createElement("img");
      image.src = fallback;
      image.classList = ["preview"];
      console.log($(this).parent());
      $(this).parent().replaceWith(image);
    });
  });
}

// init
$(function () {
  resolveAge();
  resolveCopyright();
  resolveVideoFallback();
});
