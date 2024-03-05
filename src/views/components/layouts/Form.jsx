import React from 'react'
import { Form, FormInput, Message } from 'semantic-ui-react'
import PrimaryButton from '../../components/PrimaryButton'

function GenericForm({ data, setData, onClick, errorMessage, title, buttonLabel='Salvar' }) {

    const handleInputChange = (event, { name, value }) => {
        setData(prevData => ({ ...prevData, [name]: value }))
    }

    const formFields = Object.keys(data).map(key => {
        if (key !== 'id') {
            return (
                <FormInput
                    key={key}
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    name={key}
                    value={data[key]}
                    onChange={handleInputChange}
                />
            )
        }
        return null
    })

    return (
        <>
            {errorMessage && <Message color='red'>{errorMessage}</Message>}
            {errorMessage && console.log(errorMessage)}

            {title ? <h1>Cadastro de {title}</h1> : ''}
            <Form>
                {formFields}
                <PrimaryButton label={buttonLabel} onClick={onClick} />
            </Form>
        </>
    )
}

export default GenericForm
