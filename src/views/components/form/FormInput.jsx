import React, { Component } from "react"
import ErrorMessage from "../message/ErrorMessage"
import { Form } from 'semantic-ui-react'

class FormInput extends Component {
    render() {
        const { label, type, onChange, value, name, errorMessage } = this.props;
        const inError = errorMessage ? true : false;

        return (
            <>
                {errorMessage && <ErrorMessage label={errorMessage} />}
                <Form.Input
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type}
                    error={inError}
                />
            </>
        )
    }
}

export default FormInput
