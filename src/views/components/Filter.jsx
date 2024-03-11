import { useState } from "react"
import { Button, Form, FormInput, Modal } from "semantic-ui-react"

function NameFilter({ onFilter }) {
    const [modalState, setModalState] = useState(false)
    const [name, setName] = useState("")

    const sendFilter = () => {
        setModalState(false)
        onFilter(name)
    }

    return (
        <>
            <Button onClick={() => setModalState(true)} size="small">Filtro</Button>
            <Modal
                size={"small"}
                open={modalState}
                onClose={() => setModalState(false)}
            >
                <Modal.Header>Filtro</Modal.Header>
                <Modal.Content>
                    <Form>
                        <FormInput
                            label={"Nome"}
                            name={"name"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form>
                </Modal.Content>

                <Modal.Actions>
                    <Button positive onClick={() => sendFilter()}>
                        Filtrar
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default NameFilter
