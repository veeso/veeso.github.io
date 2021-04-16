const hashBlacklist = ["#menu"];

/**
 * @description handle hash change
 */
function onHashChange() {
  const hash = location.hash;
  if (!hashBlacklist.includes(hash) && hash.length > 0) {
    selectMenuEntry(location.hash);
  }
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
  selectMenuEntry(hash);
}

function onMenuBurgerClick() {
  const active = $("#menu").hasClass("active");
  if (active) {
    $("#layout").removeClass("active");
    $("#menu").removeClass("active");
  } else {
    $("#layout").addClass("active");
    $("#menu").addClass("active");
  }
}

// Scroll events
const aboutmeWaypoint = new Waypoint({
  element: document.getElementById("about-me"),
  handler: function (_) {
    onWaypoint("#about-me");
  },
});

const projectsWaypoint = new Waypoint({
  element: document.getElementById("projects"),
  handler: function (_) {
    onWaypoint("#projects");
  },
});

const workExperienceWaypoint = new Waypoint({
  element: document.getElementById("work-experience"),
  handler: function (_) {
    onWaypoint("#work-experience");
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

window.onscroll = function () {
  if (document.documentElement.scrollTop === 0) {
    // Reset about me
    onWaypoint("#about-me");
  }
};

// Startup
$(function () {
  onHashChange();
  // Burger event listener
  $("#menu-burger").on("click", onMenuBurgerClick);
  $(".pure-menu-heading").on("click", function () {
    location.hash = "#";
    onHashChange();
  });
});
