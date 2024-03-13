import { FormInput } from 'semantic-ui-react'

function Input({ state, setState, field, label, required = false, type='text'}) {

    const handleInputChange = (event, { name, value }) => {
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <FormInput
            label={label}
            name={field}
            value={state[field]}
            onChange={handleInputChange}
            type={type}
            required={required}
        />
    )
}

export default Input
