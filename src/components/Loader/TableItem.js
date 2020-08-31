import React from 'react';




function TableItem({ item }) {

    return (
        <React.Fragment>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </React.Fragment>
    )
}


export default TableItem;