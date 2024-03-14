import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ShowPage from '../../components/layouts/ShowPage'
import RoleService from '../../../service/RoleService'

function RoleShow() {
    const [role, setRole] = useState({
        id: '',
        name: '',
    })

    const navigate = useNavigate()
    const { id } = useParams()
    const [errorMessage, setErrorMessage] = useState('')

    const roleService = useMemo(() => new RoleService({ navigate, setErrorMessage }), [navigate])

    useEffect(() => {
        roleService.get(id, setRole)
    }, [id, roleService])

    const remove = async () => {
        roleService.delete(role.id)
    }

    const navigateToEdit = async () => {
        navigate(`/roles/edit/${id}`)
    }

    return (
        <>
            <ShowPage title='Perfil' obj={role} deleteAction={remove} editAction={navigateToEdit} errorMessage={errorMessage}>
                {role.name && <p>Nome: {role.name}</p>}
            </ShowPage>
        </>
    )
}

export default RoleShow
