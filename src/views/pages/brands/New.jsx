import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewPageEntity from '../../components/layouts/NewPage'
import BrandService from '../../../service/BrandService'
function NewBrand() {
    const [brand, setBrand] = useState({
        name: '',
        description: ''
    })

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const brandService = new BrandService({ navigate, setErrorMessage })

    return (
        <NewPageEntity
            title='Marca'
            service={brandService}
            errorMessage={errorMessage}
            state={brand}
            setState={setBrand}
        />
    )
}

export default NewBrand
