import React, { useState, useEffect, useMemo } from 'react'
import { Form,  } from 'semantic-ui-react'
import SaveButton from '../helpers/SaveButton'
import ErrorMessage from '../helpers/ErrorMessage'
import UserService from '../../../../service/UserService'
import { useNavigate } from 'react-router-dom'
import Input from '../helpers/Input'

function UserEditForm({ state, setState }) {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const userService = useMemo(() => new UserService({ navigate, setErrorMessage }), [navigate, setErrorMessage])

    useEffect(() => {
        const fetchRoles = async () => {
            userService.get(state.id, setState)
        }
        fetchRoles()
    }, [userService, setState, state])

    const edit = async () => {
        userService.edit(state)
    }

    return (
        <Form>
            <h1>Cadastro de usuário</h1>
            <ErrorMessage errorMessage={errorMessage} />
            <Input
                state={state}
                setState={setState}
                field='name'
                label='Nome'
                required
            />

            <Input
                state={state}
                setState={setState}
                field='phoneNumber'
                label='Telefone'
            />

            <Input
                state={state}
                setState={setState}
                field='jobTitle'
                label='Cargo'
            />
            <SaveButton onClick={edit} />
        </Form>
    )
}

export default UserEditForm
