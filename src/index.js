import "./styles/main.css";
import validateValues from "./validateEmail";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    let password = document.getElementById("password");
    let password2 = document.getElementById("password2");
    if (event.target === password2) {
      if (event.target === password2 && password.value !== password2.value) {
        validateValues.validatePass(password, password2);
        console.log(password.value);
        console.log(password2.value);
        console.log(password.value !== password2.value);
      } else if (
        event.target === password2 &&
        password.value === password2.value
      ) {
        validateValues.validatePass(password, password2);
        console.log(password.value);
        console.log(password2.value);
        console.log(password.value !== password2.value);
      }
    }
    if (event.target !== password2) {
      const fieldName = event.target.name;
      const regex = validateValues.getRegexValues(fieldName);
      validateValues.validate(event.target, regex);
    }
  });
});

document.getElementById("myform").addEventListener("submit", (event) => {
  event.preventDefault();
  let emailInp = document.getElementById("email");
  let zipcodeInp = document.getElementById("zipcode");
  let passwordInp = document.getElementById("password");
  let password2Inp = document.getElementById("password2");

  let emailError = document.getElementById("emailError");
  let zipcodeError = document.getElementById("zipcodeError");
  let passwordError = document.getElementById("passwordError");
  let password2Error = document.getElementById("password2Error");

  emailError.classList.remove("invisible");
  zipcodeError.classList.remove("invisible");
  passwordError.classList.remove("invisible");
  password2Error.classList.remove("invisible");

  let isValid = true;

  if (!emailInp.value) {
    isValid = false;
    emailError.classList.add("visible");
  } else if (
    validateValues.validate(
      emailInp,
      validateValues.getRegexValues(emailInp.name),
    )
  ) {
    isValid = false;
    emailError.classList.add("visible");
  } else {
    emailError.classList.add("invisible");
  }

  if (!zipcodeInp.value) {
    isValid = false;
    zipcodeError.classList.add("visible");
  } else if (
    validateValues.validate(
      zipcodeInp,
      validateValues.getRegexValues(zipcodeInp.name),
    )
  ) {
    isValid = false;
    zipcodeError.classList.add("visible");
  } else {
    zipcodeError.classList.add("invisible");
  }

  if (!passwordInp.value) {
    isValid = false;
    passwordError.classList.add("visible");
  } else if (
    validateValues.validate(
      passwordInp,
      validateValues.getRegexValues(passwordInp.name),
    )
  ) {
    isValid = false;
    passwordError.classList.add("visible");
  } else {
    passwordError.classList.add("invisible");
  }

  if (!password2Inp.value) {
    isValid = false;
    password2Error.classList.add("visible");
  } else if (!validateValues.validatePass(passwordInp, password2Inp)) {
    isValid = false;
    password2Error.classList.add("visible");
    password2Error.classList.remove("invisible");
  } else if (validateValues.validatePass(passwordInp, password2Inp)) {
    isValid = false;
    password2Error.classList.add("invisible");
    password2Error.classList.remove("visible");
  } else {
    password2Error.classList.add("invisible");
  }
});
