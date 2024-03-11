import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import BrandForm from '../../components/form/BrandForm'

function BrandEdit() {
    const { id } = useParams()
    const [brand, setBrand] = useState({
        id,
        name: '',
        description: ''
    })
    return (
        <>
            <BrandForm state={brand} setState={setBrand} editMode={true} />
        </>
    )
}

export default BrandEdit
