export default class validateValues {
  static patterns = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    zipcode: /^\d{5}(?:[-\s]\d{4})?$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };

  static validate(field, regex) {
    if (regex && regex.test(field.value)) {
      field.className = "valid";
    } else {
      field.className = "invalid";
    }
  }

  static validatePass(password, password2) {
    if (password.value !== password2.value) {
      password2.className = "invalid";
    } else if (password.value === password2.value) {
      password2.className = "valid";
    }
  }

  static getRegexValues(name) {
    return this.patterns[name];
  }

  static setError(element, message) {
    const parent = element.parentElement;
  }
}
