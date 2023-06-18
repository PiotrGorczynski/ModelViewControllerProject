import React from 'react';
import { TableItemWrapper } from './TableItem.styles';

const TableItem = ({ label, value, percent }) => (
	<TableItemWrapper>
		<p style={{ fontWeight: 'bold' }}>{label.substr(0,label.length/2)}</p>
		<p style={{ color: percent < 0 ? 'red' : percent > 0 ? 'green' : 'black' }}>
			<strong>{percent} %</strong>
		</p>
		<p>
			{value} {label.substr(label.length/2,label.length/2)}
		</p>
	</TableItemWrapper>
);

export default TableItem;
