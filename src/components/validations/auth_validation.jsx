import Validation from "./validation";

class AuthValidation extends Validation {
    state = {
        login: '',
        password: '',

        loginValid: false,
        passwordValid: false,
        formValid: false
    }
}