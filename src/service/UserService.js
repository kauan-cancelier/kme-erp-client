import api from './Api'

const ENDPOINT = '/users'

export default class UserService {

    constructor({navigate, setErrorMessage = ''}) {
        this.navigate = navigate
        this.setErrorMessage = setErrorMessage
    }

    insert(user) {
        api.post(ENDPOINT, {
            name: user.name,
            email: user.email,
            cpf: user.cpf,
            phoneNumber: user.phone_number,
            password: user.password,
            jobTitle: user.job_title
        })
        .then(response => {
            if (response.status === 201) {
                this.navigate('/')
            }
        })
        .catch(error => {
            showError(error, this.setErrorMessage)
        })
    }

    delete(id) {
        api.delete(`${ENDPOINT}/${id}`)
        .then((response) => {
            if (response) {
                this.navigate(ENDPOINT, {
                    replace: true,
                    state: {message: 'Registro excluído com sucesso!'}
                })
            }
        }).catch(error => {
            showError(error, this.setErrorMessage)
        })
    }

    edit(user) {
        api.put(`${ENDPOINT}`, {
            name: user.name,
            email: user.email,
            cpf: user.cpf,
            phoneNumber: user.phone_number,
            password: user.password,
            jobTitle: user.job_title
        })
        .then(response => {
            if (response.status === 200) {
                this.navigate(`${ENDPOINT}`, {
                    state: {message: 'Alterado com sucesso', success: true}
                })
            }
        }).catch(error => {
            showError(error, this.setErrorMessage)
        })
    }

    get(id, setUser) {
        api.get(`${ENDPOINT}/${id}`)
        .then(response => {
            setUser(response.data)
        }).catch(error => {
            showError(error, this.setErrorMessage)
        })
    }

  list(filterName, setData) {
    const url = filterName ? `${ENDPOINT}?name=${filterName}` : ENDPOINT
    api.get(url).then((response) => {
        setData(response.data)
    }).catch((error) => {
        showError(error, this.setErrorMessage)
    })
  }
}

function showError(error, setErrorMessage) {
    if (error.response && error.response.data) {
        return setErrorMessage(error.response.data)
    }
    console.log(error)
    return setErrorMessage('Servidor indisponível.')
}
