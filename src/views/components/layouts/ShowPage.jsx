import React from 'react'
import ShowActionsButton from '../ShowActionsButton'

function ShowPage({ title, obj = {}, errorMessage = '', deleteAction, editAction }) {

    if (!obj || Object.keys(obj).length === 0) {
        return (
            <p>
                {errorMessage || 'Não há informações disponíveis.'}
            </p>
        )
    }

    const firstLetterUpper = (key) => {
        return key.charAt(0).toUpperCase() + key.slice(1)
    }

    const renderDetails = (key) => {
        return (
            <div style={{ marginBottom: 10 }} key={key}>
                <strong>
                    {firstLetterUpper(key)}:
                </strong>
                {` ${obj[key]}`}
            </div>
        )
    }

    const details = Object.keys(obj).map((key) => (
        renderDetails(key)
    ))

    return (
        <>
            <h1>{title}</h1>
            {details}
            <ShowActionsButton
                deleteAction={deleteAction}
                editAction={editAction}
            />
        </>
    )
}

export default ShowPage
