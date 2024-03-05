import api from './Api'

const ENDPOINT = '/categories'

export default class CategoryService {

    constructor({navigate, setErrorMessage = ''}) {
        this.navigate = navigate
        this.setErrorMessage = setErrorMessage
    }

    insert(category) {
        api.post(ENDPOINT, {
            name: category.name,
            description: category.description})
        .then(response => {
            if (response.status === 201) {
                this.navigate(ENDPOINT)
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

    edit(category) {
        api.put(`${ENDPOINT}`, {
            id: category.id,
            name: category.name,
            description: category.description})
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

    get(id, setCategory) {
        api.get(`${ENDPOINT}/${id}`)
        .then(response => {
            setCategory(response.data)
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
