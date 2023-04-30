const form = document.querySelector("form");
const registration = document.getElementById("registrationStatus");

form.addEventListener("submit", (event) => {
  console.group();
  const name = form.inputName.value.length > 0 ? form.inputName.value : "None";
  console.log("Full name: ", name);

  const email =
    form.inputEmail.value.length > 0 ? form.inputEmail.value : "None";
  console.log("Email: ", email);

  const registrationValue =
    registration.options[registration.selectedIndex].text;
  console.log("Registration Status: ", registrationValue);

  const checkedCourses = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const checkedCoursesValues = Array.from(checkedCourses).map((x) => x.value);
  console.log("Courses = ", checkedCoursesValues.join(", "));

  const comment =
    form.formControlTextarea.value.length > 0
      ? form.formControlTextarea.value
      : "None";
  console.log("Comments: ", comment);
  console.groupEnd();
  event.preventDefault();
});
