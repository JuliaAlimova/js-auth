class SignupForm {
  static value = {}

  static validate = (name, value) => {
    return true
  }

  static submit = () => {}

  static change = (name, value) => {
    if (this.validate(name, value)) this.value[name] = value
  }
}

window.signupForm = SignupForm
