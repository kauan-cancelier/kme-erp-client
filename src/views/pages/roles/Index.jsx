import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "semantic-ui-react"
import NameFilter from "../../components/Filter"
import ErrorMessage from "../../components/ErrorMessage"
import CustomTable from "../../components/Table"
import RolesService from "../../../service/RoleService"

function RolesIndex() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const service = useMemo(() => new RolesService({ navigate, setErrorMessage }), [navigate])
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
            <h1>Perfis</h1>
            <>
            <Button onClick={() => navigate(`/roles/new`)} positive size="small">Cadastrar</Button>
                <NameFilter onFilter={getFilter} />
            </>
            <CustomTable headers={["Id", "Nome"]} data={data} link={'roles'}/>
        </>
    )
}

export default RolesIndex
