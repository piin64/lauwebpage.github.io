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