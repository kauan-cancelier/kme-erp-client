import { Form } from "semantic-ui-react"
import SaveButton from "./helpers/SaveButton"
import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "./helpers/ErrorMessage"
import Input from "./helpers/Input"
import RoleService from "../../../service/RoleService"

function RoleForm({ editMode = false, state, setState }) {

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const service = useMemo(() => new RoleService({ navigate, setErrorMessage }), [navigate, setErrorMessage]);

    useEffect(() => {
        if (editMode) {
            service.get(state.id, setState)
        }
    }, [state.id, setState, service, editMode])

    const save = async () => {
        service.insert(state)
    }

    const edit = async () => {
        service.edit(state)
    }

    return (
        <Form>
            {editMode ? <h1>Editando perfil {state.id}</h1> : <h1>Cadastro de perfil</h1>}
            <ErrorMessage errorMessage={errorMessage} />
            <Input
                state={state}
                setState={setState}
                field='name'
                label='Nome'
                required
            />

            <SaveButton onClick={editMode ? edit : save} />
        </Form>
    )
}

export default RoleForm
