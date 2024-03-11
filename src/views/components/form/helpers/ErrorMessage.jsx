import { Message } from "semantic-ui-react"

function ErrorMessage({ errorMessage }) {
    return (
        <>
            {errorMessage ? <Message floating negative >{errorMessage}</Message> : ''}
        </>
    )
}

export default ErrorMessage
