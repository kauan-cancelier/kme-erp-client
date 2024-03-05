import { Button } from "semantic-ui-react";

export default function ShowActionsButton({ deleteAction, editAction }) {
    return (
        <div style={{ marginTop: '20px' }}>
            <Button negative onClick={deleteAction}>
                Excluir
            </Button>

            <Button onClick={editAction}>
                Editar
            </Button>
        </div>
    )
}
