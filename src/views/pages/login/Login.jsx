import React, { useState } from 'react'
import { Form, FormInput, Message } from 'semantic-ui-react'
import PrimaryButton from '../../components/PrimaryButton'
import api from '../../../service/Api'
import { Navigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [redirectToHome, setRedirectToHome] = useState(false)

    const login = async () => {
        api.post('/login', {
            email: email,
            password: password,
        }).then(response => {
            if (response.status === 200) {
                setRedirectToHome(true)
            }
        }).catch(error => {
            if (error.response && error.response.status === 400) {
                setErrorMessage(error.response.data.error)
            } else {
                console.log(error)
            }
        })
    }

    if (redirectToHome) {
        return <Navigate to="/" state={{ message: `Bem vindo!` }} replace />
    }

    return (
        <>
            {errorMessage && <div><Message color='red'>{errorMessage}</Message><br /></div>}
            <h1>Login</h1>
            <Form>
                <FormInput label='email' placeholder='example@gmail.com' onChange={
                    (e) => setEmail(e.target.value)
                } />

                <FormInput label='Senha' type='password' onChange={
                    (e) => setPassword(e.target.value)
                } />

                <PrimaryButton label="Logar" onClick={login} />
            </Form>
        </>
    )
}

export default Login
