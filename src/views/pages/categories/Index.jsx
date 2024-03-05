import React, { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import CategoryService from "../../../service/CategoryService"
import IndexEntity from "../../components/layouts/IndexPage"

function CategoryIndex() {
    const navigate = useNavigate()
    const categoryService = useMemo(() => new CategoryService({ navigate }), [navigate])
    return (
        <IndexEntity
            service={categoryService}
            title='Categorias'
            newEntityPath='/categories/new'
            tableProps={{link: 'categories'}}
        />
    )
}

export default CategoryIndex
