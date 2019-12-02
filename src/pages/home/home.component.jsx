import React from 'react';

import BookingForm from '../../components/booking-form/booking-form.component';
import VehicleListing from '../../components/vehicle-listing/vehicle-listing.component';
 
import './home.styles.scss';

const HomePage = () => (
    <div className="homePageWrapper d-flex">
        <BookingForm />
        <VehicleListing />
    </div>
);

export default HomePage;