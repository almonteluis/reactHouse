import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import HousesContext from '../common/context/houseContext';
import House from '.';

const HouseFromQuery = () => {
    const allHouses = useContext(HousesContext);
    const { id } = useParams();
    const house = allHouses.find((h) => h.id === parseInt(id));

    if (!house) return <div>House not found.</div>
    return (
        <House house={house} />
    )
}

export default HouseFromQuery