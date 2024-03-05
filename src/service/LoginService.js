import api from "./Api"
const ENDPOINT = '/login'

export default class {

    constructor({navigate, setErrorMessage = ''}) {
        this.navigate = navigate
        this.setErrorMessage = setErrorMessage
    }

    login(credentials) {
        api.post(ENDPOINT, {
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
    if (error.response && error.response.data) {
        return setErrorMessage(error.response.data.error)
    }
    console.log(error)
    return setErrorMessage('Servidor indisponível.')
}
