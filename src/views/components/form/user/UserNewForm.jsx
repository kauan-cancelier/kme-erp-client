import { Form } from "semantic-ui-react"
import SaveButton from "../helpers/SaveButton"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../helpers/ErrorMessage"
import Input from "../helpers/Input"
import UserService from "../../../../service/UserService"

function UserNewForm({ state, setState }) {

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const service = useMemo(() => new UserService({ navigate, setErrorMessage }), [navigate, setErrorMessage]);

    const save = async () => {
        console.log(state)
        service.insert(state)
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

            <SaveButton onClick={save} />
        </Form>
    )
}

export default UserNewForm
