import React from 'react';

import './main-search.styles.scss';

const MainSearch = () => (
    <form className="mainSearchForm">
        <div className="input-group">
            <input 
                type="text" 
                className="form-control"
                placeholder="Enter Reservation ID"
            />
            <div className="input-group-append">
                <span className="input-group-text">
                    <button type="submit" className="btn"><i class="fas fa-search"></i> Search</button>
                </span>
            </div>
        </div>
    </form>
);

export default MainSearch;