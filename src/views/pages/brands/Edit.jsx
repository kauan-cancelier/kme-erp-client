import React, { useEffect, useState, useMemo } from 'react' // Importe o useMemo
import { useNavigate, useParams } from 'react-router-dom'
import Brand from '../../../service/BrandService'
import GenericForm from '../../components/layouts/Form'

function EditBrand() {
    const { id } = useParams()
    const [brand, setBrand] = useState({
        id,
        name: '',
        description: ''
    })

    const [errorMessage] = useState('')
    const navigate = useNavigate()

    const brandService = useMemo(() => new Brand({ navigate }), [navigate])

    useEffect(() => {
        brandService.get(id, setBrand)
    }, [id, brandService])

    const edit = async () => {
        brandService.edit(brand)
    }

    return (
        <>
            <GenericForm
                data={brand}
                setData={setBrand}
                onSave={edit}
                errorMessage={errorMessage}
            />
        </>
    )
}

export default EditBrand
