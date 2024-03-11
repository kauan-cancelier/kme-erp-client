import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "semantic-ui-react"
import NameFilter from "../../components/Filter"
import ErrorMessage from "../../components/ErrorMessage"
import UserService from "../../../service/UserService"
import CustomTable from "../../components/Table"

function UserIndex() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const service = useMemo(() => new UserService({ navigate, setErrorMessage }), [navigate])
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
            <h1>Usuários</h1>
            <>
            <Button onClick={() => navigate(`/users/new`)} positive size="small">Cadastrar</Button>
                <NameFilter onFilter={getFilter} />
            </>
            <CustomTable headers={["Código", "Nome", "CPF", "Telefone", "Cargo"]} data={data} link={'brands'}/>
        </>
    )
}

export default UserIndex

