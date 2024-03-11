import GenericForm from './Form'

function FormEntity({service, errorMessage = '', title, state, setState, editMode = false}) {

    const save = async () => {
        service.insert(state)
    }

    const edit = async () => {
        service.edit(state)
    }

    return (
        <>
            <GenericForm
                data={state}
                setData={setState}
                onClick={editMode ? edit : save}
                errorMessage={errorMessage}
                title={title}
            />
        </>
    )
}

export default FormEntity
