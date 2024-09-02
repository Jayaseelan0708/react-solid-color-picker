/*********
    * 
    * {COMPANY_NAME}. Confidential
    * ____
    * 
    *  Copyright {COMPANY_NAME}. 2020. All rights reserved
    * 
    * NOTICE:  All information contained herein is, and remains
    * the property of {COMPANY_NAME}. and its suppliers,
    * if any.  The intellectual and technical concepts contained
    * herein are proprietary to {COMPANY_NAME}.
    * and its suppliers and may be covered by U.S. and Foreign Patents,
    * patents in process, and are protected by trade secret or copyright law.
    * Dissemination of this information or reproduction of this material
    * is strictly forbidden unless prior written permission is obtained
    * from {COMPANY_NAME}.
*/

import React, { useState, useEffect } from 'react'
import classNames from 'classnames';
import './style.css';

const App = ({
    label = "Select Color",
    value = "#FFFFFF",
    disabled = false,
    onChange = () => { },

}) => {
    const [color, setColor] = useState("#FFFFFF");

    const handleChange = (values) => {
        try {
            let colorCode = document.getElementById("show-color-code");
            setColor(values);
            onChange(values);
        }
        catch (err) {

        }
    }

    useEffect(() => {
        setColor(value);
    }, [value]);

    return (
        <div className='color-panel'>
            <div className='custom-label'>
                {label}
            </div>
            <div id="color-input-picker" className={classNames("color-input-picker flx jce aic min-w-100 max-w-130", { "disabled-picker opacity-04": disabled })} >
                <input
                    id="custom-color-pickerInput"
                    className='max-w-100'
                    type="text"
                    placeholder='#FFF'
                    value={color}
                    onChange={(e) => { handleChange(e.target.value) }}
                    disabled={disabled}
                />
                <input
                    id="custom-color-picker"
                    type="color"
                    placeholder='#FFF'
                    value={color}
                    onChange={(e) => { handleChange(e.target.value) }}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}

export default App