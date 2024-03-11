import { useState } from 'react'
import BrandForm from '../../components/form/BrandForm'

function CategoryNew() {
    const [brand, setBrand] = useState({
        name: '',
        description: ''
    })
    return (
        <BrandForm state={brand} setState={setBrand}/>
    )
}

export default CategoryNew
