import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectToggleAdvancedFeatures } from '../../redux/common/common.selectors';

import WizardNavigation from '../../components/wizard-navigation/wizard-navigation.component';
import WizardContainer from '../../components/wizard-container/wizard-container.component';
import WizardActionBar from '../../components/wizard-action-bar/wizard-action-bar.component';
import AdvancedFeatures from '../../components/advanced-features/advanced-features.component';

import './wizard.styles.scss';

const Wizard = ({toggleAdvancedFeatures}) => (
    <div className="wizardPageWrapper">
        <Route path="/wizard/:wizardStep" render={() => <WizardActionBar reservationID="1245856ADc" isWizard={true} />} />
        {
            (toggleAdvancedFeatures) ?
            <AdvancedFeatures />
            : ''
        }
        <div className="wizardWrap">
            <WizardNavigation/>
            <WizardContainer/>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    toggleAdvancedFeatures : selectToggleAdvancedFeatures
});

export default connect(mapStateToProps)(Wizard);