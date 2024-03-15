import api from './Api'

const ENDPOINT = '/roles'

export default class RoleService {
  constructor({navigate, setErrorMessage = () => {}}) {
    this.navigate = navigate;
    this.setErrorMessage = setErrorMessage;
  }

  insert(role) {
    api.post(ENDPOINT, role)
        .then(response => {
          if (response.status === 201) {
            this.navigate(ENDPOINT);
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

  edit(role) {
    api.put(`${ENDPOINT}`, {
        id: role.id,
        name: role.name}, {headers: this.headers})
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

  get(id, setRole) {
    api.get(`${ENDPOINT}/${id}`)
        .then(response => {
          console.log(response)
          setRole(response.data)
        })
        .catch(error => {
          showError(error, this.setErrorMessage)
        })
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
    if (errors[0]) {
      return setErrorMessage(errors[0].message || errors[0])
    }
  }
  // if (error.response.status === 403) {
  //   return setErrorMessage('Acesso negado.')
  // }
  return setErrorMessage('Servidor indisponível.')
}
