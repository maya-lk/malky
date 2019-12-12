import React from 'react';
import { Switch , Route } from 'react-router-dom';

import WizardStepOne from '../wizard-step-01/wizard-step-01.component';

import './wizard-container.styles.scss';

const WizardContainer = () => (
    <div className="wizardContainer">
        <Switch>
          <Route exact path="/" component={WizardStepOne} />
        </Switch>
    </div>
);

export default WizardContainer;