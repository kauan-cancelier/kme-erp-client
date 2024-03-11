import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import CategoryService from "../../../service/CategoryService"
import { Button } from "semantic-ui-react"
import NameFilter from "../../components/Filter"
import ErrorMessage from "../../components/ErrorMessage"
import CustomTable from "../../components/Table"

function CategoryIndex() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const service = useMemo(() => new CategoryService({ navigate, setErrorMessage }), [navigate])
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
            <h1>Categorias</h1>
            <>
            <Button onClick={() => navigate(`/categories/new`)} positive size="small">Cadastrar</Button>
                <NameFilter onFilter={getFilter} />
            </>
            <CustomTable headers={["Id", "Código", "Descrição"]} data={data} link={'categories'}/>
        </>
    )
}

export default CategoryIndex
