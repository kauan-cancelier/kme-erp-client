import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ShowPage from '../../components/layouts/ShowPage'
import User from '../../../service/UserService'

function ShowUser() {
    const [user, setUser] = useState({
        id: '',
        name: '',
        description: ''
    })

    const navigate = useNavigate()
    const { id } = useParams()

    const userService = useMemo(() => new User({ navigate }), [navigate])

    useEffect(() => {
        userService.get(id, setUser)
    }, [id, userService])

    const remove = async () => {
        userService.delete(user.id)
    }

    const navigateToEdit = async () => {
        navigate(`/users/edit/${id}`)
    }

    return (
        <>
            <ShowPage
                title='Usuário'
                obj={user}
                deleteAction={remove}
                editAction={navigateToEdit}
            />
        </>
    )
}

export default ShowUser
