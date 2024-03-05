import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CategoryService from '../../../service/CategoryService'
import GenericForm from '../../components/layouts/Form'

function CategoryEdit() {
    const { id } = useParams()
    const [category, setCategory] = useState({
        id,
        name: '',
        description: ''
    })

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const categoryService = useMemo(() => new CategoryService({ navigate, setErrorMessage  }), [navigate])

    useEffect(() => {
        categoryService.get(id, setCategory)
    }, [id, categoryService])

    const edit = async () => {
        categoryService.edit(category)
    }

    return (
        <>
            <GenericForm
                data={category}
                setData={setCategory}
                onSave={edit}
                errorMessage={errorMessage}
            />
        </>
    )
}

export default CategoryEdit
