import React from 'react';
import { TableWrapper } from './Table.styles';
import TableItem from '../TableItem/TableItem';

const Table = ({ rates }) =>
	rates ? (
		<TableWrapper>
			{rates.map((rate) => (
				<TableItem key={rate.symbol} percent={rate.priceChangePercent} label={rate.symbol} value={rate.lastPrice} />
			))}
		</TableWrapper>
	) : undefined;

export default Table;
