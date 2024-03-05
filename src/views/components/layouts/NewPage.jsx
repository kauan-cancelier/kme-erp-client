import GenericForm from '../../components/layouts/Form'

function NewPageEntity({service, errorMessage = '', title, state, setState}) {

    const save = async () => {
        service.insert(state)
    }

    return (
        <>
            <GenericForm
                data={state}
                setData={setState}
                onClick={save}
                errorMessage={errorMessage}
                title={title}
            />
        </>
    )
}

export default NewPageEntity
