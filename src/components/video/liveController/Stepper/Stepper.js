import React from 'react';
import PropTypes from 'prop-types';
import HorizonStepper from "react-stepper-horizontal"
const Stepper = props => {
    return (
        <div>
              <HorizonStepper  steps={props.steps} activeStep={props.state} />
        </div>
    );
};

Stepper.propTypes = {
    
};

export default Stepper;