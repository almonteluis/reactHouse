import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HousesContext from '../common/context/houseContext';

const HouseFilter = () => {
    const allHouses = useContext(HousesContext);
    const countries = allHouses
        ? Array.from(new Set(allHouses.map((h) => h.country)))
        : [];

    const [selectedCountry, setSelectedCountry] = useState('');
    const navigate = useNavigate();

    const onSearchChange = (event) => {
        const country = event.target.value;
        setSelectedCountry(country);
        navigate(`/searchresults/${country}`);
    };

    return (
        <FormControl className='d-flex justify-content-end' sx={{ m: 1, width: 300 }}>
            <InputLabel id="country-select-label">Look for your dream house in country</InputLabel>
            <Select
                labelId="country-select-label"
                id="country-select"
                value={selectedCountry}
                label="Look for your dream house in country"
                onChange={onSearchChange}
            >
                {countries.map((country) => (
                    <MenuItem key={country} value={country}>
                        {country}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default HouseFilter;