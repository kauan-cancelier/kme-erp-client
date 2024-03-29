import api from './Api'

const ENDPOINT = '/brands'

export default class BrandService {
  constructor({navigate, setErrorMessage = () => {}}) {
    this.navigate = navigate
    this.setErrorMessage = setErrorMessage
    this.headers = {
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
  }

  insert(brand) {
    api.post(ENDPOINT, {name: brand.name, description: brand.description}, {headers: this.headers})
        .then(response => {
          if (response.status === 201) {
            this.navigate(ENDPOINT)
          }
        })
        .catch(error => {showError(error, this.setErrorMessage)})
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
        })
        .catch(error => {showError(error, this.setErrorMessage)})
  }

  edit(brand) {
    api.put(
           `${ENDPOINT}`,
           {id: brand.id, name: brand.name, description: brand.description}, {headers: this.headers})
        .then(response => {
          if (response.status === 200) {
            this.navigate('/brands', {
              state:
                  {message: 'A marca foi alterada com sucesso', success: true}
            })
          }
        })
        .catch(error => {showError(error, this.setErrorMessage)})
  }

  get(id, setBrand) {
    api.get(`${ENDPOINT}/${id}`, {headers: this.headers})
        .then(response => {setBrand(response.data)})
        .catch(error => {showError(error, this.setErrorMessage)})
  }

  list(filterName, setData) {
    const url = filterName ? `${ENDPOINT}?name=${filterName}` : 'brands'
    api.get(url, {headers: this.headers})
        .then((response) => {setData(response.data)})
        .catch((error) => {showError(error, this.setErrorMessage)})
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
