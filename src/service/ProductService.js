import api from './Api'

const ENDPOINT = '/products'

export default class ProductService {

    constructor({navigate, setErrorMessage = ''}) {
        this.navigate = navigate
        this.setErrorMessage = setErrorMessage
        this.headers = {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    }

    insert(product) {
        api.post(ENDPOINT, {product}, {headers: this.headers})
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
        api.delete(`${ENDPOINT}/${id}`, {headers: this.headers})
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

    edit(product) {
        api.put(`${ENDPOINT}`, {product}, {headers: this.headers})
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

    get(id, setProduct) {
        api.get(`${ENDPOINT}/${id}`, {headers: this.headers})
        .then(response => {
            setProduct(response.data)
        }).catch(error => {
            showError(error, this.setErrorMessage)
        })
    }

  list(filterName, setData) {
    const url = filterName ? `${ENDPOINT}?name=${filterName}` : ENDPOINT
    api.get(url, {headers: this.headers}).then((response) => {
        console.log(response.data.content)
        setData(response.data.content)
    }).catch((error) => {
        return showError(error, this.setErrorMessage)
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
    if (error.response.status === 403) {
      return setErrorMessage('Acesso negado.')
    }
    return setErrorMessage('Servidor indisponível.')
  }
