import React from "react"
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react"

function CustomTable({ data = [], link }) {

    const renderTableHeaders = () => {
        if (data && data.length > 0) {
            const firstItem = data[0]
            const headerKeys = Object.keys(firstItem)

            return (
                <TableHeader>
                    <TableRow>
                        {headerKeys.map(key => (
                            <TableHeaderCell key={key}>
                                {key === 'id' ? 'Id' : key}
                            </TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHeader>
            )
        }
        return null;
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
            ));
        }
        return null;
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
