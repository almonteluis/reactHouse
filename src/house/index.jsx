import React, { useState } from 'react'
import { formatCurrency } from '../common/utils/helper'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Inquiry from './Inquiry';
import './house.css'
import PropTypes from 'prop-types';

const House = ({ house }) => {
    const [openForm, setOpenForm] = useState(false);
    const toggleForm = () => {
        setOpenForm(!openForm);
    };

    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-md-12">
                    <h5>{house.country}</h5>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-12">
                    <h3>{house.address}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.jpeg`} alt='house' />
                </div>
                <div className="col-md-5">
                    <p className='price'>{formatCurrency(house.price)}</p>
                    <p>{house.description}</p>
                    {/* add icons and form here */}
                    <ContactMailIcon
                        fontSize='large'
                        className='price'
                        onClick={toggleForm} />

                    {openForm && (
                        <Inquiry house={house} />
                    )}
                </div>
            </div>
        </div>
    )
}

House.propTypes = {
    house: PropTypes.object.isRequired,
};

export default House