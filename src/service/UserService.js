import api from './Api'

const ENDPOINT = '/users'

export default class UserService {
  constructor({navigate, setErrorMessage = () => {}}) {
    this.navigate = navigate;
    this.setErrorMessage = setErrorMessage;
  }

  insert(user) {
    api.post(ENDPOINT, user)
        .then(response => {
          if (response.status === 201) {
            this.navigate('/');
          }
        })
        .catch(error => showError(error, this.setErrorMessage));
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
        })
        .catch(error => {showError(error, this.setErrorMessage)})
  }

  edit(userFormData) {
    const user = Object.keys(userFormData).reduce((acc, key) => {
      acc[key] = userFormData[key].value;
      return acc;
    }, {});

    api.put(ENDPOINT, user)
        .then(response => {
          if (response.status === 200) {
            this.navigate(
                `${ENDPOINT}`,
                {state: {message: 'Alterado com sucesso', success: true}})
          }
        })
        .catch(error => {showError(error, this.setErrorMessage)})
  }

  get(id, setUser) {
    api.get(`${ENDPOINT}/${id}`)
        .then(response => {setUser(response.data)})
        .catch(error => {showError(error, this.setErrorMessage)})
  }

  list(filterName, setData) {
    const url = filterName ? `${ENDPOINT}?name=${filterName}` : ENDPOINT
    api.get(url)
        .then((response) => {setData(response.data.content)})
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
