import React from 'react';
import { TableItemWrapper } from './TableItem.styles';

const TableItem = ({ label, value, percent }) => (
	<TableItemWrapper>
		<p style={{ fontWeight: 'bold' }}>{label}</p>
		<p style={{ color: percent < 0 ? 'red' : percent > 0 ? 'green' : 'black' }}>
			<strong>{percent} %</strong>
		</p>
		<p>
			{value} <strong>USD</strong>
		</p>
	</TableItemWrapper>
);

export default TableItem;
