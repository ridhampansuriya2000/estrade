import React, {useState} from 'react';

const HeaderController = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownVisible(!dropdownVisible);
    };
    return{dropdownVisible, setDropdownVisible,toggleDropdown}
};

export default HeaderController;
