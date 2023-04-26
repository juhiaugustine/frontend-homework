let form = document.querySelector("form");
let registration = document.getElementById("registrationStatus");
let checkbox1 = document.getElementById("programmingLanguages");
let checkbox2 = document.getElementById("operatingSystems");
let checkbox3 = document.getElementById("fullStack");

form.addEventListener("submit", (event) => {
  console.group();
  let name = form.inputName.value.length > 0 ? form.inputName.value : "None";
  console.log("Full name: ", name);

  let email = form.inputEmail.value.length > 0 ? form.inputEmail.value : "None";
  console.log("Email: ", email);

  let registrationValue = registration.options[registration.selectedIndex].text;
  console.log("Registration Status: ", registrationValue);

  let selectedCourses = [];
  if (checkbox1.checked) {
    selectedCourses.push("Programming Languages");
  }
  if (checkbox2.checked) {
    selectedCourses.push("Operating Systems");
  }
  if (checkbox3.checked) {
    selectedCourses.push("Full Stack Web Development");
  }

  let courses = selectedCourses.join(", ");
  if (courses.length > 0) {
    console.log("Courses : ", courses);
  } else {
    console.log("Courses: None");
  }

  let comment =
    form.formControlTextarea.value.length > 0
      ? form.formControlTextarea.value
      : "None";
  console.log("Comments: ", comment);
  console.groupEnd();
  event.preventDefault();
});
