
//HTML elements
var mainNavigationS = "#main-navigation";
var navbarCollapseButtonS = "#navbar-collapse-button"
var headerS = "#home"
var aboutS = "#about"
var skillsS = "#skills"
var projectsS = "#projects"

//CSS classes
var navbarFilledHeader = "navbar-filled-header";
var navbarFilledAbout = "navbar-filled-about";
var navbarFilledSkills = "navbar-filled-skills";
var navbarFilledProjects = "navbar-filled-projects";
var navbarFilledContacts = "navbar-filled-contacts";

var navbarFilled = navbarFilledHeader;

var colorChangeOffset = -80;

$(document).ready(function () {
    subscribeToEvents();
})

function subscribeToEvents() {
    $(window).scroll(onWindowScrolled);
    $(document).on('click', 'a[href^="#"]', smoothScrolling);
}

function onWindowScrolled() {
    var scroll = $(window).scrollTop();
    var mainNavigation = $(mainNavigationS);

    mainNavigation.removeClass(navbarFilled);
    navbarFilled = getNavbarFill(scroll);
    mainNavigation.addClass(navbarFilled);
}

function getNavbarFill(scroll) {
    var currentHeight = 0;

    currentHeight += $(headerS).height();
    if (scroll < currentHeight + colorChangeOffset) {
        return navbarFilledHeader;
    }

    currentHeight += $(aboutS).height();
    if (scroll < currentHeight + colorChangeOffset) {
        return navbarFilledAbout;
    }

    currentHeight += $(skillsS).height();
    if (scroll < currentHeight + colorChangeOffset) {
        return navbarFilledSkills;
    }

    currentHeight += $(projectsS).height();
    if (scroll < currentHeight + colorChangeOffset) {
        return navbarFilledProjects;
    }

    return navbarFilledContacts;
}

function smoothScrolling(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
}