import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "semantic-ui-react"
import NameFilter from "../../components/Filter"
import ErrorMessage from "../../components/ErrorMessage"
import BrandService from "../../../service/BrandService"
import CustomTable from "../../components/Table"

function CategoryIndex() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const service = useMemo(() => new BrandService({ navigate, setErrorMessage }), [navigate])
    const [data, setData] = useState([])

    const list = useCallback((filterName = "") => {
        service.list(filterName, setData)
    }, [service])

    useEffect(() => {
        list()
    }, [list])

    const getFilter = (name) => {
        list(name)
    }

    return (
        <>
            {errorMessage ? <ErrorMessage message={errorMessage}/> : ''}
            <h1>Marcas</h1>
            <>
            <Button onClick={() => navigate(`/brands/new`)} positive size="small">Cadastrar</Button>
                <NameFilter onFilter={getFilter} />
            </>
            <CustomTable headers={["Id", "Código", "Descrição"]} data={data} link={'brands'}/>
        </>
    )
}

export default CategoryIndex
