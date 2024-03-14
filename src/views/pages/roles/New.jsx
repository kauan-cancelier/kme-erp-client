import { useState } from 'react'
import RoleForm from '../../components/form/RoleForm'

function RoleNew() {
    const [role, setRole] = useState({
        name: '',
    })
    return (
        <RoleForm state={role} setState={setRole}/>
    )
}

export default RoleNew
