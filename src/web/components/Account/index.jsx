import React from 'react';
import AccountController from "./AccountController"

const Account = () => {
    const {activeStep, setActiveStep,} = AccountController();

    return (
        <div>
            Account
        </div>
    );
};

export default Account;
