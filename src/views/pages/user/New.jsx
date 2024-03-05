import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewPageEntity from '../../components/layouts/NewPage'
import UserService from '../../../service/UserService'

function NewUser() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        cpf: '',
        phone_number: '',
        password: '',
        confirm_password: '',
        job_title: '',
    })

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const userService = new UserService({ navigate, setErrorMessage })

    return (
        <NewPageEntity
            title='Usuário'
            service={userService}
            errorMessage={errorMessage}
            state={user}
            setState={setUser}
        />
    )
}
export default NewUser
