import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginService from '../../../service/LoginService'
import GenericForm from '../../components/layouts/Form'

function Login() {

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()
    const loginService = useMemo(() => new LoginService({ navigate, setErrorMessage }), [navigate])

    const login = async () => {
        loginService.login(credentials)
    }

    return (
        <>
            <h1>Login</h1>
            <GenericForm
                data={credentials}
                setData={setCredentials}
                onClick={login}
                buttonLabel='Entrar'
                errorMessage={errorMessage}
            />
        </>
    )
}

export default Login
