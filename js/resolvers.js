/**
 * @description resolve age in resolve-age elements
 */
function resolveAge() {
  const birthdate = new Date(1997, 4, 30);
  const diff = Date.now() - birthdate.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  // Replace all tags
  $(".resolve-age").each(function () {
    $(this).text(age);
  });
}

function resolveCopyright() {
  const year = new Date().getFullYear();
  $(".resolve-copyright").each(function () {
    $(this).text(year);
  });
}

/**
 * @description call all resolvers
 */
function resolve() {
  resolveAge();
  resolveCopyright();
}

// init
$(function () {
  resolve();
});
