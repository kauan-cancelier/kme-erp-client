import React from "react"
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"

function CustomTable({ headers = [], data = [], link }) {

    const renderTableHeaders = () => {
        return (
            <TableHeader>
                <TableRow>
                    {headers.map((header, idx) => (
                        <TableHeaderCell key={idx}>
                            {header}
                        </TableHeaderCell>
                    ))}
                </TableRow>
            </TableHeader>
        )
    }

    const renderTableRows = () => {
        if (data && data.length > 0) {
            return data.map((brand, index) => (
                <TableRow key={index}>
                    {Object.keys(brand).map((key, idx) => (
                        <TableCell key={idx}>
                            {key === 'id' ? (
                                <a href={`/${link}/${brand[key]}`}>{brand[key]}</a>
                            ) : (
                                brand[key]
                            )}
                        </TableCell>
                    ))}
                </TableRow>
            ))
        }
        return null
    }

    return (
        <Table celled selectable>
            {renderTableHeaders()}
            <TableBody>
                {renderTableRows()}
            </TableBody>
        </Table>
    )
}

export default CustomTable
