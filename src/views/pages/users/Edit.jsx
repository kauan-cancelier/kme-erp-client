import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserService from '../../../service/UserService'
import FormEntity from '../../components/layouts/FormEntity'

function EditUser() {

    const { id } = useParams()

    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        cpf: '',
        phone_number: '',
        password: '',
        confirm_password: '',
        job_title: ''
    })

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const userService = useMemo(() => new UserService({ navigate, setErrorMessage }), [navigate])

    useEffect(() => {
        userService.get(id, setUser)
    }, [id, setUser, userService])

    return (
        <FormEntity
            title='Usuário'
            service={userService}
            state={user}
            setState={setUser}
            editMode={true}
            errorMessage={errorMessage}
        />
    )
}

export default EditUser
