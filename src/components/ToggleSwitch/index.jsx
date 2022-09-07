import { useState } from 'react';
import { Toggle } from './styled'

export default function ToggleSwitch({ toggleChecked }) {
    const [priceType, setPriceType] = useState('Annualy');

    function handleClick(e) {
        const switchToggle = e.target.previousSibling;
        let type;
        if (switchToggle.checked) {
            type = 'Annualy';
        } else {
            type = 'Monthly';
        }
        setPriceType(type);
    }

    return (

        <Toggle className='switch' onClick={(e) => toggleChecked(e.target.previousSibling.checked)}>
            <input type="checkbox" />
            <span className='slider round'></span>
        </Toggle >

    );
}