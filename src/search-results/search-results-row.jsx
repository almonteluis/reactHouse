import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../common/utils/helper';
import './search-results.css';

const SearchResultsRow = ({ house }) => {
    const navigate = useNavigate();
    const [selectHouse, setSelectHouse] = useState();
    const setActive = () => {
        setSelectHouse(house.id);
        navigate(`/house/${house.id}`);
    };
    return (
        <tr onClick={setActive}>
            <td>{house.address}</td>
            <td>{formatCurrency(house.price)}</td>
            <td>{house.likes}</td>
        </tr>
    )
}

export default SearchResultsRow;