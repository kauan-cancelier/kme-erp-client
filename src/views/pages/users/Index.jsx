import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"
import NameFilter from "../../components/Filter"
import ErrorMessage from "../../components/ErrorMessage"
import UserService from "../../../service/UserService"

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

    const renderTableHeaders = () => {
        return (
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Código</TableHeaderCell>
                    <TableHeaderCell>Nome</TableHeaderCell>
                    <TableHeaderCell>Cpf</TableHeaderCell>
                    <TableHeaderCell>Telefone</TableHeaderCell>
                    <TableHeaderCell>Cargo</TableHeaderCell>
                    <TableHeaderCell>Perfil</TableHeaderCell>
                </TableRow>
            </TableHeader>

        )
    }

    const renderTableRows = () => {
        if (data && data.length > 0) {
            return data.map((user) => (
                <TableRow key={user.id}>
                    <TableCell>
                        <a href={`users/${user.id}`}>
                            {user.id}
                        </a>
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.cpf}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                    <TableCell>{user.jobTitle}</TableCell>
                    <TableCell>{user.role.name}</TableCell>
                </TableRow>
            ))
        }
        return null
    }
    return (
        <>
            {errorMessage ? <ErrorMessage message={errorMessage} /> : ''}
            <h1>Usuários</h1>
            <>
                <Button onClick={() => navigate(`/users/new`)} positive size="small">Cadastrar</Button>
                <NameFilter onFilter={getFilter} />
            </>
            <Table celled selectable>
                {renderTableHeaders()}
                <TableBody>
                    {renderTableRows()}
                </TableBody>
            </Table>
        </>
    )
}

export default UserIndex

