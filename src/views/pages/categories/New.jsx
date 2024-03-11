import { useState } from 'react'
import CategoryForm from '../../components/form/CategoryForm'

function CategoryNew() {
    const [category, setCategory] = useState({
        name: '',
        description: ''
    })
    return (
        <CategoryForm state={category} setState={setCategory}/>
    )
}

export default CategoryNew
