/**
 * @description resolve age in resolve-age elements
 */
function resolveAge() {
  const birthdate = new Date(1997, 4, 30);
  const diff = Date.now() - birthdate.getTime();
  const ageDate = new Date(diff);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  // Replace all tags
  document.querySelectorAll(".resolve-age").forEach(function (el) {
    console.log("AHO", age);
    el.textContent = age;
  });
}

/**
 * @description call all resolvers
 */
function resolve() {
  resolveAge();
}

// init
resolve();
