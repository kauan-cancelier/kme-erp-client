import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserService from '../../../service/UserService'
import UserEditForm from '../../components/form/user/UserEditForm'

function EditUser() {

    const { id } = useParams()

    const [user, setUser] = useState({
        id,
        name: '',
        email: '',
        cpf: '',
        phone_number: '',
        password: '',
        confirm_password: '',
        job_title: '',
        role: {
            id: '',
            name: ''
        }
    })

    const navigate = useNavigate()
    const userService = useMemo(() => new UserService({ navigate }), [navigate])

    useEffect(() => {
        userService.get(id, setUser)
    }, [id, setUser, userService])

    return (
        <UserEditForm
            state={user}
            setState={setUser}
        />
    )
}

export default EditUser
