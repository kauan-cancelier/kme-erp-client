function loggedIn() {
    if(sessionStorage.getItem('token')) {
        return true
    }
    return false
}

export default loggedIn
