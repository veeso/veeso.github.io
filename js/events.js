/**
 * @description handle hash change
 */
function onHashChange() {
  console.log(location.hash);
}

// Register
window.onhashchange = onHashChange;
