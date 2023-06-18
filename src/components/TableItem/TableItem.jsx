import React from 'react';
import { TableItemWrapper } from './TableItem.styles';


const TableItem = ({label, value}) => (
    <TableItemWrapper>
        <p style={{fontWeight: 'bold'}}>{label}</p>
        <p>{value} <strong>USD</strong></p>
    </TableItemWrapper>
)

export default TableItem;