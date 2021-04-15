/**
 * @description handle hash change
 */
function onHashChange() {
  selectMenuEntry(location.hash);
}

/**
 * @description select menu entry
 * @param {*} hash
 */
function selectMenuEntry(hash) {
  // Remove current entry
  $(".pure-menu-selected").removeClass("pure-menu-selected");
  $('a[href$="' + hash + '"]')
    .parent()
    .addClass("pure-menu-selected");
}

function onWaypoint(hash) {
  location.hash = hash;
  onHashChange();
}

// Scroll events
const aboutmeWaypoint = new Waypoint({
  element: document.getElementById("about-me"),
  handler: function (_) {
    onWaypoint("#about-me");
  },
});

const workExperienceWaypoint = new Waypoint({
  element: document.getElementById("work-experience"),
  handler: function (_) {
    onWaypoint("#work-experience");
  },
});

const projectsWaypoint = new Waypoint({
  element: document.getElementById("projects"),
  handler: function (_) {
    onWaypoint("#projects");
  },
});

const contactsWaypoint = new Waypoint({
  element: document.getElementById("contacts"),
  handler: function (_) {
    onWaypoint("#contacts");
  },
});

// Register
window.onhashchange = onHashChange;
