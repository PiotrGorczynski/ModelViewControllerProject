import { useState } from 'react';
import styled from 'styled-components';
import Topbar from './components/Topbar/Topbar';
import Table from './components/Table/Table';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%:
  min-height: 100vh;
  padding: 0 2rem;
`;

function App() {
	const [rates, setRates] = useState(null);

	const handleCheck = () => {
		fetch('https://data.binance.com/api/v3/ticker/24hr')
			.then((data) => data.json())
			.then((data) => {
				setRates(data);
				return data;
			})
			.catch((e) => {
				console.error('Error when fetching data...', e.message);
			});
	};

	return (
		<Wrapper>
			<Topbar onClick={handleCheck} />
			<Table rates={rates} />
		</Wrapper>
	);
}

export default App;
