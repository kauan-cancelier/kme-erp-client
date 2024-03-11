import React, { useState, useEffect, useCallback } from "react"
import { Button } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import CustomTable from "../../components/Table"
import NameFilter from "../../components/Filter"

function IndexEntity({service, title, newEntityPath, tableProps, errorMessage = ''}) {
    const [data, setData] = useState([])
    const navigate = useNavigate()

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
            {errorMessage ? errorMessage : ''}
            <h1>{title}</h1>
            <>
            <Button onClick={() => navigate(newEntityPath)} positive size="small">Cadastrar</Button>
                <NameFilter onFilter={getFilter} />
            </>
            <CustomTable data={data} {...tableProps}/>
        </>
    )
}

export default IndexEntity
