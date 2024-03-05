import React, { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import Brand from "../../../service/BrandService"
import IndexEntity from "../../components/layouts/IndexPage"

function HomeBrand() {
    const navigate = useNavigate()
    const brandService = useMemo(() => new Brand({ navigate }), [navigate])

    return (
        <IndexEntity
            service={brandService}
            title='Marcas'
            newEntityPath='/brands/new'
            tableProps={{link: 'brands'}}
        />
    )
}

export default HomeBrand
