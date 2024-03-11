import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ShowPage from '../../components/layouts/ShowPage'
import CategoryService from '../../../service/CategoryService'

function CategoryShow() {
    const [category, setCategory] = useState({
        id: '',
        name: '',
        description: ''
    })

    const navigate = useNavigate()
    const { id } = useParams()

    const categoryService = useMemo(() => new CategoryService({ navigate }), [navigate])

    useEffect(() => {
        categoryService.get(id, setCategory)
    }, [id, categoryService])

    const remove = async () => {
        categoryService.delete(category.id)
    }

    const navigateToEdit = async () => {
        navigate(`/categories/edit/${id}`)
    }

    return (
        <>
            <ShowPage title='Categoria' obj={category} deleteAction={remove} editAction={navigateToEdit}>
                {category.name && <p>Nome: {category.name}</p>}
                {category.description && <p>Descrição: {category.description}</p>}
            </ShowPage>
        </>
    )
}

export default CategoryShow
