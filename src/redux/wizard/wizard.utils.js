export const removeStepFromWizard = ( doneSteps , removeStep ) => {

    if( doneSteps.indexOf(removeStep) >= 0 ){
        return doneSteps.filter( step => step !== removeStep );
    }

    return doneSteps;

}