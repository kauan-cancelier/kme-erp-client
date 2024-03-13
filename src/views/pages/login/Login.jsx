import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginService from '../../../service/LoginService'
import LoginNavbar from '../../components/navbar/login/LoginNavbar'
import CustomContainer from '../../components/layouts/Container'
import Input from '../../components/form/helpers/Input'
import { Form, FormButton } from 'semantic-ui-react'
import ErrorMessage from '../../components/form/helpers/ErrorMessage'
import Footer from '../../components/footer/Footer'

function Login() {

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        sessionStorage.clear()
    })

    const navigate = useNavigate()
    const loginService = useMemo(() => new LoginService({ navigate, setErrorMessage }), [navigate])

    const login = async () => {
        if (credentials.email && credentials.password) {
            return loginService.login(credentials)
        }
        return setErrorMessage("Todos os campos são obrigatórios. ")
    }

    return (
        <>
            <LoginNavbar />
            <CustomContainer>
                {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
                <h1>Login</h1>
                <Form >
                    <Input
                        state={credentials}
                        setState={setCredentials}
                        field='email'
                        label='Email'
                        type='email'
                        required
                    />

                    <Input
                        state={credentials}
                        setState={setCredentials}
                        field='password'
                        label='Senha'
                        type='password'
                        required
                    />
                </Form>

                <FormButton onClick={login} style={{ marginTop: '2vh' }} primary>Entrar</FormButton>
            </CustomContainer>
            <Footer />
        </>
    )
}

export default Login
