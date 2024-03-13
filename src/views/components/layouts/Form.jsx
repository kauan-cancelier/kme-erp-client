import React from 'react'
import { Button, Form, FormInput, Message } from 'semantic-ui-react'

function GenericForm({ data, setData, onClick, errorMessage='', title, buttonLabel='Salvar' }) {

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
            {errorMessage && console.log(errorMessage)}
            {errorMessage && <Message color='red'>{errorMessage}</Message>}

            {title ? <h1>Cadastro de {title}</h1> : ''}
            <Form>
                {formFields}
                    <Button onClick={onClick}>
                        {buttonLabel}
                    </Button>
            </Form>
        </>
    )
}

export default GenericForm
