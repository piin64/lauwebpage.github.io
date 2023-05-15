function showHobbies() {
  var hobbies = document.getElementById("hobbies");
  hobbies.style.display = "block";
}

function hideHobbies() {
  var hobbies = document.getElementById("hobbies");
  hobbies.style.display = "none";
}

function increaseFontSize() {
  var body = document.getElementsByTagName("body")[0];
  var fontSize = parseInt(window.getComputedStyle(body, null).getPropertyValue("font-size"));
  body.style.fontSize = (fontSize + 2) + "px";
}

function decreaseFontSize() {
  var body = document.getElementsByTagName("body")[0];
  var fontSize = parseInt(window.getComputedStyle(body, null).getPropertyValue("font-size"));
  body.style.fontSize = (fontSize - 2) + "px";
}

function toggleSocialMedia() {
  var socialMedia = document.getElementById("social-media");
  if (socialMedia.style.display === "none") {
    socialMedia.style.display = "block";
  } else {
    socialMedia.style.display = "none";
  }
}

function forwardTo(url) {
  window.location.href = url;
}

window.onscroll = function() {
    var scrollToTopButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
