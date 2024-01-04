import React, {useState} from 'react';

const AccountInfoController = () => {
    const [accountInfo, setAccountInfo] = useState();
    return{accountInfo, setAccountInfo}
};

export default AccountInfoController;
