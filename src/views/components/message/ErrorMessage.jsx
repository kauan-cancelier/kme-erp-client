import React from "react"
import { Message } from "semantic-ui-react"

const ErrorMessage = ({ message }) => {
    return message ? <Message attached>{message}</Message> : null
}

export default ErrorMessage
