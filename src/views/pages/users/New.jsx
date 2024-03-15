import React, { useState } from 'react'
import UserNewForm from '../../components/form/user/UserNewForm'

function NewUser() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        cpf: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        jobTitle: '',
        role: {
            id: ''
        }
    })

    return (
        <UserNewForm
            state={user}
            setState={setUser}
        />
    )
}
export default NewUser
