import React, { useState, useEffect, useMemo } from 'react'
import { Form, FormField, Radio } from 'semantic-ui-react'
import SaveButton from '../helpers/SaveButton'
import ErrorMessage from '../helpers/ErrorMessage'
import UserService from '../../../../service/UserService'
import RoleService from '../../../../service/RoleService'
import { useNavigate } from 'react-router-dom'
import Input from '../helpers/Input'

function UserNewForm({ state, setState }) {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [selectedRole, setSelectedRole] = useState('')
    const [roles, setRoles] = useState([])

    const userService = useMemo(() => new UserService({ navigate, setErrorMessage }), [navigate, setErrorMessage])
    const roleService = useMemo(() => new RoleService({ navigate, setErrorMessage }), [navigate, setErrorMessage])

    useEffect(() => {
        const fetchRoles = async () => {
            roleService.list("", setRoles)
        }
        fetchRoles()
    }, [roleService])

    const handleChange = (e, { value }) => setSelectedRole(value)

    const save = async () => {
        const updatedState = { ...state, role: {id: selectedRole} }
        console.log(updatedState)
        userService.insert(updatedState)
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
                field='email'
                label='Email'
                required
            />

            <Input
                state={state}
                setState={setState}
                field='cpf'
                label='CPF'
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
                field='password'
                label='Senha'
            />

            <Input
                state={state}
                setState={setState}
                field='confirmPassword'
                label='Confirmação de senha'
            />

            <Input
                state={state}
                setState={setState}
                field='jobTitle'
                label='Cargo'
            />
            <h3>Perfil</h3>
            <p>Selecione um perfil</p>
            {roles.map(role => (
                <FormField>
                    <Radio
                        key={role.id}
                        label={role.name}
                        name='roleGroup'
                        value={role.id}
                        checked={selectedRole === role.id}
                        onChange={handleChange}
                    />
                </FormField>
            ))}
            <SaveButton onClick={save} />
        </Form>
    )
}

export default UserNewForm
