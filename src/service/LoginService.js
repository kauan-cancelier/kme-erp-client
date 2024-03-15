import api from "./Api"
const ENDPOINT = '/auth'

export default class LoginService {

    constructor({setErrorMessage = ''}) {
        this.setErrorMessage = setErrorMessage
    }

    async login(credentials) {
        try {
            const response = await api.post(`${ENDPOINT}`, {
                email: credentials.email,
                password: credentials.password,
            });

            if (response.status === 200) {
                console.log('200');

                const token = response.data.token;
                sessionStorage.setItem('token', token)

                return token;
            }
        } catch (error) {
            showError(error, this.setErrorMessage);
        }
    }



}

function showError(error, setErrorMessage) {
    console.log(error)
    if (error.response && error.response.data) {
      const errors = error.response.data.errors
      if (errors) {
        return setErrorMessage(errors[0].message)
      }
    }
    if (error.response.status === 403) {
      return setErrorMessage('Email e/ou senha inválidos.')
    }
    return setErrorMessage('Servidor indisponível.')
}
