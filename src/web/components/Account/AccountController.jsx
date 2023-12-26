import React, {useState} from 'react';

const AccountController = () => {
    const [activeStep, setActiveStep] = useState("");
    return {
        activeStep,
        setActiveStep,

    };
};

export default AccountController;
