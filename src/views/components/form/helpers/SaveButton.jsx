import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

function SaveButton({label = "Salvar", onClick}) {
    const navigate = useNavigate()
    if (!onClick) {
        onClick = () => {
            navigate("/page_not_found")
        }
    }
    return (
        <Button onClick={onClick} type="submit" positive>
            {label}
        </Button>
    )
}

export default SaveButton
