import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setActiveStep } from '../../redux/wizard/wizard.actions';
import { selectActiveStep } from '../../redux/wizard/wizard.selectors';

import './wizard-navigation.styles.scss';

const WizardNavigation = ({ activeStep , setActiveStep }) => (
    <nav className="nav wizardNavigation">
        <span 
            className={`${ (activeStep === 1)? 'active' : '' } nav-link`}
            onClick={ () => setActiveStep(1) }
        >
            <span className="number">01</span>
            RESERVATION TYPE
        </span>
        <span 
            className={`${ (activeStep === 2)? 'active' : '' } nav-link`}
            onClick={ () => setActiveStep(2) }
        >
            <span className="number">02</span>
            RESERVATION DETAILS
        </span>
        <span 
            className={`${ (activeStep === 3)? 'active' : '' } nav-link`}
            onClick={ () => setActiveStep(3) }
        >
            <span className="number">03</span>
            VEHICLE SELECTION
        </span>
        <span 
            className={`${ (activeStep === 4)? 'active' : '' } nav-link`}
            onClick={ () => setActiveStep(4) }
        >
            <span className="number">04</span>
            PAYMENT DETAILS
        </span>
        <span 
            className={`${ (activeStep === 5)? 'active' : '' } nav-link`}
            onClick={ () => setActiveStep(5) }
        >
            <span className="number">05</span>
            RESERVATION CONFIRMATION
        </span>
    </nav>
);

const mapStateToProps = createStructuredSelector({
    activeStep : selectActiveStep
});

const mapDispatchToProps = dispatch => ({
    setActiveStep : (activeStep) => dispatch(setActiveStep(activeStep))
});

export default connect(mapStateToProps , mapDispatchToProps)(WizardNavigation);