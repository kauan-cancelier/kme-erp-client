import { Button } from "semantic-ui-react"

function PrimaryButton(props) {
    return (
        <Button type='submit' primary onClick={props.onClick}>
            {props.label}
        </Button>
    )
}

export default PrimaryButton
