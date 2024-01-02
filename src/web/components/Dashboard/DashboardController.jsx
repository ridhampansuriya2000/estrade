import React, {useState} from 'react';

const DashboardController = () => {
    const [activeStep, setActiveStep] = useState("");

    return {
        activeStep,
        setActiveStep,
    };
};

export default DashboardController;
