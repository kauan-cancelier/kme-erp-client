import React from 'react'
import ShowActionsButton from '../ShowActionsButton'
import ErrorMessage from '../ErrorMessage'

function ShowPage({ title, errorMessage = '', deleteAction, editAction, children }) {

    return (
        <>
            {errorMessage ? <ErrorMessage message={errorMessage}/> : ''}
            <h1>{title}</h1>
            <div style={{ marginBottom: 10 }}>
                {children}
            </div>
            <ShowActionsButton
                deleteAction={deleteAction}
                editAction={editAction}
            />
        </>
    )
}

export default ShowPage
