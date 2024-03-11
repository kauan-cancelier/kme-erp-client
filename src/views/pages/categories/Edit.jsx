import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryForm from '../../components/form/CategoryForm'

function CategoryEdit() {
    const { id } = useParams()
    const [category, setCategory] = useState({
        id,
        name: '',
        description: ''
    })
    return (
        <>
            <CategoryForm state={category} setState={setCategory} editMode={true} />
        </>
    )
}

export default CategoryEdit
