import React from 'react';
import AccountInfoController from "./AccountInfoController";

const AccountInfo = () => {
    const {accountInfo, setAccountInfo} = AccountInfoController();
    return (
        <div>
            AccountInfo
        </div>
    );
};

export default AccountInfo;
