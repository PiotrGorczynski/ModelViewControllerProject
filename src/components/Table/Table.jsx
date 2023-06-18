import React from 'react';
import { TableWrapper } from './Table.styles';
import TableItem from '../TableItem/TableItem';

const Table = ({rates}) => (
        rates ?  <TableWrapper>
            {Object.keys(rates).map((key, value) => (
                <TableItem key={key} label={key} value={rates[key]} />
            ))}
        </TableWrapper> : undefined
)

export default Table;