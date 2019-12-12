import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { setActiveStep , setDoneSteps , removeDoneSteps } from '../../redux/wizard/wizard.actions';
import { selectActiveStep , selectDoneSteps } from '../../redux/wizard/wizard.selectors';

import './wizard-navigation.styles.scss';

const WizardNavigation = ({ activeStep , setActiveStep , setDoneSteps , doneSteps , removeDoneSteps }) => {
    
    const handleClick = (number) => {
        setActiveStep(number);

        if(doneSteps.indexOf(number) < 0){
            setDoneSteps(number);
        }else{
            removeDoneSteps(number);
        }

    }

    return(
        <nav className="nav wizardNavigation">
            <Link
                to="/wizard" 
                className={`${ (doneSteps.indexOf(1) >= 0)? 'active' : '' } nav-link`}
                onClick={ () => handleClick(1) }
            >
                <span className="number">01</span>
                RESERVATION TYPE
            </Link>
            <Link 
                to="/wizard/reservation-details" 
                className={`${ (doneSteps.indexOf(2) >= 0)? 'active' : '' } nav-link`}
                onClick={ () => handleClick(2) }
            >
                <span className="number">02</span>
                RESERVATION DETAILS
            </Link>
            <Link 
                to="/wizard/vehicle-selection"
                className={`${ (doneSteps.indexOf(3) >= 0)? 'active' : '' } nav-link`}
                onClick={ () => handleClick(3) }
            >
                <span className="number">03</span>
                VEHICLE SELECTION
            </Link>
            <Link 
                to="/wizard/payment-details"
                className={`${ (doneSteps.indexOf(4) >= 0)? 'active' : '' } nav-link`}
                onClick={ () => handleClick(4) }
            >
                <span className="number">04</span>
                PAYMENT DETAILS
            </Link>
            <Link
                to="/wizard/reservation-confirmation" 
                className={`${ (doneSteps.indexOf(5) >= 0)? 'active' : '' } nav-link`}
                onClick={ () => handleClick(5) }
            >
                <span className="number">05</span>
                RESERVATION CONFIRMATION
            </Link>
        </nav>
    )
};

const mapStateToProps = createStructuredSelector({
    activeStep : selectActiveStep,
    doneSteps : selectDoneSteps
});

const mapDispatchToProps = dispatch => ({
    setActiveStep : (activeStep) => dispatch(setActiveStep(activeStep)),
    setDoneSteps : (doneSteps) => dispatch(setDoneSteps(doneSteps)),
    removeDoneSteps : (doneSteps) => dispatch(removeDoneSteps(doneSteps)),
});

export default connect(mapStateToProps , mapDispatchToProps)(WizardNavigation);