import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import RoleForm from '../../components/form/RoleForm'

function RoleEdit() {
    const { id } = useParams()
    const [role, setRole] = useState({
        id,
        name: '',
    })
    return (
        <>
            <RoleForm state={role} setState={setRole} editMode={true} />
        </>
    )
}

export default RoleEdit
