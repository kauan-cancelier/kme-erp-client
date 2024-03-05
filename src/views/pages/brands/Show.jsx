import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ShowPage from '../../components/layouts/ShowPage'
import Brand from '../../../service/BrandService'

function ShowBrand() {
    const [brand, setBrand] = useState({
        id: '',
        name: '',
        description: ''
    })

    const navigate = useNavigate()
    const { id } = useParams()

    const brandService = useMemo(() => new Brand({ navigate }), [navigate])

    useEffect(() => {
        brandService.get(id, setBrand)
    }, [id, brandService])

    const deleteBrand = async () => {
        brandService.delete(brand.id)
    }

    const navigateToEdit = async () => {
        navigate(`/brands/edit/${id}`)
    }

    return (
        <>
            <ShowPage
                title='Marca'
                obj={brand}
                deleteAction={deleteBrand}
                editAction={navigateToEdit}
            />
        </>
    )
}

export default ShowBrand
