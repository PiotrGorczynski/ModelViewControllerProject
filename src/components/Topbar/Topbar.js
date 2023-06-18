import React from 'react';
import Button from '@mui/material/Button';
import { StyledDetails, Wrapper } from './Topbar.styles';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { languages } from '../../translations';

const Details = ({ language }) => {
	const d = new Date().getTime() + 7200000;
	const hour = new Date(d);
	const t = hour.toISOString().substring(0, 19).split('T');

	return (
		<StyledDetails>
			<h3>
				{languages[language].lastChecked}: {t[0]} {t[1]}
			</h3>
		</StyledDetails>
	);
};

const Topbar = ({ onClick }) => {
	const [language, setLanguage] = React.useState('pl');
	const handleLanguageChange = (e, newLang) => {
		if (newLang) setLanguage(newLang);
	};

	return (
		<Wrapper>
			<ToggleButtonGroup color="primary" value={language} exclusive onChange={handleLanguageChange} aria-label="language">
				<ToggleButton value="en">EN</ToggleButton>
				<ToggleButton value="pl">PL</ToggleButton>
			</ToggleButtonGroup>
			<h1>Cryptocurrency exhange checker</h1>
			<Details language={language} />
			<Button variant="contained" onClick={onClick}>
				{languages[language].check}
			</Button>
		</Wrapper>
	);
};

export default Topbar;
