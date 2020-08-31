import React from 'react';
import TableItem from './Loader/TableItem';



function Table({ data, onSort, sortOrder, sortField }) {

    function showSign(param) {
        const sortSign = sortOrder === "asc" ? <small>▲</small> : <small>▼</small>;

        return sortField === param ? sortSign : null
    }


    return (
        <table className="table mt-4 table-striped">
            <thead className="bg-dark white-text">
                <tr>
                    <th onClick={() => onSort("id")}>ID {showSign("id")}</th>
                    <th onClick={() => onSort("username")}>First Name {showSign("username")}</th>
                    <th onClick={() => onSort("name")}>Last Name {showSign("name")}</th>
                    <th onClick={() => onSort("email")}>Email {showSign("email")}</th>
                    <th onClick={() => onSort("phone")}>Phone {showSign("phone")}</th>
                </tr>
            </thead>

            <tbody>
                {data.map(item => {
                    return (
                        <tr key={item.id}>
                            <TableItem item={item} />
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


export default Table;