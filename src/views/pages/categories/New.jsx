import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryService from '../../../service/CategoryService'
import NewPageEntity from '../../components/layouts/NewPage'

function CategoryNew() {

    const [category, setCategory] = useState({
        name: '',
        description: ''
    })

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const categoryService = new CategoryService({ navigate, setErrorMessage })

    return (
        <NewPageEntity
            title='Categoria'
            service={categoryService}
            errorMessage={errorMessage}
            state={category}
            setState={setCategory}
        />
    )
}

export default CategoryNew
