// DOM Selection and Content Update Starter
// ---------------------------------------
// This file contains full beginner solutions, but everything stays commented out.

// STEP 1: Select all the elements you need
const studentInput = document.getElementById("studentInput");
const colorInput = document.getElementById("colorInput");
const imageInput = document.getElementById("imageInput");
const studentName = document.getElementById("studentName");
const studentMessage = document.getElementById("studentMessage");
const previewCard = document.getElementById("previewCard");
const studentAvatar = document.getElementById("studentAvatar");
const updateNameBtn = document.getElementById("updateNameBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const changeImageBtn = document.getElementById("changeImageBtn");
const defaultAvatar =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' rx='60' fill='%23d7e7f7'/%3E%3Ccircle cx='60' cy='46' r='22' fill='%231c6bb1'/%3E%3Cpath d='M28 96c7-17 22-26 32-26s25 9 32 26' fill='%231c6bb1'/%3E%3C/svg%3E";

// STEP 2: Update the student's name when the button is clicked
updateNameBtn.addEventListener("click", function () {
  if (studentInput.value.trim() === "") {
    studentName.textContent = "Student Name Here";
    studentMessage.textContent = "Please type a name first.";
  } else {
    studentName.textContent = studentInput.value;
    studentMessage.textContent =
      "Hello, " + studentInput.value + ". Welcome to the school portal.";
  }
});

// STEP 3: Change the preview card color
changeColorBtn.addEventListener("click", function () {
  if (colorInput.value.trim() === "") {
    studentMessage.textContent =
      "Please type a color before changing the theme.";
  } else {
    previewCard.style.backgroundColor = colorInput.value;
    studentMessage.textContent =
      "Theme color updated to " + colorInput.value + ".";
  }
});

// STEP 4: Change the image and the alt text
changeImageBtn.addEventListener("click", function () {
  if (imageInput.value.trim() === "") {
    studentAvatar.src = defaultAvatar;
    studentAvatar.alt = "Default student avatar";
    studentMessage.textContent =
      "No image URL was entered, so the default avatar is being used.";
  } else {
    studentAvatar.src = imageInput.value;
    studentAvatar.alt = "Updated student avatar";
    studentMessage.textContent = "The profile image has been changed.";
  }
});

// STEP 5: Optional live update while typing
studentInput.addEventListener("input", function () {
  if (studentInput.value.trim() === "") {
    studentName.textContent = "Student Name Here";
  } else {
    studentName.textContent = studentInput.value;
  }
});

// Teaching ideas:
// - Compare click events and input events
// - Explain textContent, value, src, and alt
// - Let students try changing font color as another task
// - Let students add an error message when the image link is broken
