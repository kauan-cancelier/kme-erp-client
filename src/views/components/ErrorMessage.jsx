import { Message } from 'semantic-ui-react'

function ErrorMessage({message=''}) {
    return (
        <Message negative>
        <p>{message}</p>
      </Message>
    )
}

export default ErrorMessage
