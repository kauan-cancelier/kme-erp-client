import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ShowPage from '../../components/layouts/ShowPage'
import BrandService from '../../../service/BrandService'

function BrandShow() {
    const [brand, setBrand] = useState({
        id: '',
        name: '',
        description: ''
    })

    const navigate = useNavigate()
    const { id } = useParams()
    const [errorMessage, setErrorMessage] = useState('')

    const service = useMemo(() => new BrandService({ navigate, setErrorMessage }), [navigate])

    useEffect(() => {
        service.get(id, setBrand)
    }, [id, service])

    const remove = async () => {
        service.delete(brand.id)
    }

    const navigateToEdit = async () => {
        navigate(`/brands/edit/${id}`)
    }

    return (
        <>
            <ShowPage title='Marcas' obj={brand} deleteAction={remove} editAction={navigateToEdit} errorMessage={errorMessage}>
                {brand.name && <p>Nome: {brand.name}</p>}
                {brand.description && <p>Descrição: {brand.description}</p>}
            </ShowPage>
        </>
    )
}

export default BrandShow
