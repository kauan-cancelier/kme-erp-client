import api from "./Api"
const ENDPOINT = '/login'

export default class LoginService {

    constructor({navigate, setErrorMessage = ''}) {
        this.navigate = navigate
        this.setErrorMessage = setErrorMessage
    }

    login(credentials) {
        api.post(`${ENDPOINT}`, {
            email: credentials.email,
            password: credentials.password,
        })
        .then(response => {
            if (response.status === 200) {
                this.navigate('/')
            }
        })
        .catch(error => {
            showError(error, this.setErrorMessage)
        })
    }

}

function showError(error, setErrorMessage) {
    console.log(error)
    if (error.response && error.response.data) {
        const errors = error.response.data.errors
        if (errors) {
            return setErrorMessage(errors[0])
        }

    }
    return setErrorMessage('Servidor indisponível.')
}
