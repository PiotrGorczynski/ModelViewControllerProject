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

  const [topbarData, setTopbarData] = useState(null);
  const [rates, setRates] = useState(null);
  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  const handleCheck = () => {
    const data = fetch('http://api.coinlayer.com/live?access_key=8b872c631a3440435bc591a6a38f3046')
    .then(data => data.json())
    .then(data => {
      setRates(data.rates)
      return data;
    })
    .then(data => setTopbarData({timestamp: data.timestamp, target: data.target}))
    .catch(e => {
      console.error('Error when fetching data...', e.message);
    }) 
  }

	return <Wrapper>
    <Topbar data={topbarData} onClick={handleCheck} />
    <Table rates={rates} />
  </Wrapper>;
}

export default App;
